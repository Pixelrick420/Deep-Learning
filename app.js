(function () {
  "use strict";

  var KEY = "dlmcq.v2";
  var Q = window.QUESTIONS || [];

  var progressEl = document.getElementById("progress");
  var main = document.getElementById("main");
  var backBtn = document.getElementById("backBtn");

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.answers) {
        if (typeof s.index === "number" && !s.mode) {
          return {
            mode: "full",
            index: s.index,
            answers: s.answers,
            week: s.week,
          };
        }
        return s;
      }
    } catch (e) {}
    return {
      mode: null,
      lastMode: null,
      lastWeek: null,
      index: 0,
      answers: {},
    };
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {}
  }

  var state = load();
  var currentQuestions = [];
  if (state.mode === "full") {
    currentQuestions = Q.slice();
  } else if (state.mode === "week" && state.week) {
    currentQuestions = getWeekQuestions(state.week);
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function md(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  }

  function selectedKeys() {
    var out = [];
    var inputs = main.querySelectorAll("input:checked");
    for (var i = 0; i < inputs.length; i++) out.push(inputs[i].value);
    return out;
  }

  function syncSelected() {
    var labels = main.querySelectorAll(".option");
    for (var i = 0; i < labels.length; i++) {
      var l = labels[i];
      l.classList.toggle("selected", l.querySelector("input").checked);
    }
  }

  function getWeekQuestions(weekNum) {
    var start = (weekNum - 1) * 20 + 1;
    var end = weekNum * 20;
    return Q.filter(function (q) {
      return q.n >= start && q.n <= end;
    });
  }

  function renderHome() {
    if (backBtn) backBtn.style.display = "none";
    progressEl.textContent = "Quiz Options";
    main.innerHTML = "";

    var h = document.createElement("h1");
    h.className = "q";
    h.textContent = "Choose a Test";
    main.appendChild(h);

    var options = document.createElement("div");
    options.className = "home-options";

    var fullBtn = document.createElement("button");
    fullBtn.textContent = "Full Test";
    fullBtn.addEventListener("click", function () {
      state.mode = "full";
      state.lastMode = "full";
      state.lastWeek = null;
      state.index = 0;
      state.answers = {};
      currentQuestions = Q.slice();
      save();
      render();
    });
    options.appendChild(fullBtn);

    for (var week = 1; week <= 12; week++) {
      var weekBtn = document.createElement("button");
      weekBtn.textContent = "Week " + week;
      weekBtn.addEventListener(
        "click",
        (function (w) {
          return function () {
            state.mode = "week";
            state.week = w;
            state.lastMode = "week";
            state.lastWeek = w;
            state.index = 0;
            state.answers = {};
            currentQuestions = getWeekQuestions(w);
            save();
            render();
          };
        })(week),
      );
      options.appendChild(weekBtn);
    }

    main.appendChild(options);
  }

  function renderQuestion() {
    if (backBtn) backBtn.style.display = "inline-flex";
    var q = currentQuestions[state.index];
    var rec = state.answers[q.n];

    progressEl.textContent =
      "Question " + (state.index + 1) + " / " + currentQuestions.length;
    main.innerHTML = "";

    var h = document.createElement("h1");
    h.className = "q";
    h.innerHTML = md(q.question);
    main.appendChild(h);

    var opts = document.createElement("div");
    opts.className = "options";
    q.options.forEach(function (o) {
      var label = document.createElement("label");
      label.className = "option";
      label.dataset.key = o.key;

      var input = document.createElement("input");
      input.type = q.multi ? "checkbox" : "radio";
      input.name = "opt";
      input.value = o.key;

      var txt = document.createElement("span");
      txt.innerHTML = '<span class="key">' + o.key + ")</span> " + md(o.text);

      label.appendChild(input);
      label.appendChild(txt);
      opts.appendChild(label);
    });
    main.appendChild(opts);

    var fb = document.createElement("div");
    fb.id = "feedback";
    main.appendChild(fb);

    var controls = document.createElement("div");
    controls.className = "controls";

    var submit = document.createElement("button");
    submit.id = "submit";
    submit.textContent = "Submit";

    var next = document.createElement("button");
    next.id = "next";
    next.textContent =
      state.index === currentQuestions.length - 1 ? "Finish" : "Next";
    next.addEventListener("click", function () {
      state.index += 1;
      save();
      render();
    });

    controls.appendChild(submit);
    controls.appendChild(next);
    main.appendChild(controls);

    submit.disabled = true;
    if (rec) {
      reveal(q, rec);
    } else {
      next.style.display = "none";
      opts.addEventListener("change", function () {
        syncSelected();
        submit.disabled = selectedKeys().length === 0;
      });
      submit.addEventListener("click", function () {
        var sel = selectedKeys();
        var correct =
          sel.length === q.correct.length &&
          q.correct.every(function (k) {
            return sel.indexOf(k) !== -1;
          });
        state.answers[q.n] = { selected: sel, correct: correct };
        save();
        reveal(q, state.answers[q.n]);
      });
    }
  }

  /* Mark answers after submitting (or on resume) and show the Next button. */
  function reveal(q, rec) {
    var labels = main.querySelectorAll(".option");
    for (var i = 0; i < labels.length; i++) {
      var label = labels[i];
      var key = label.dataset.key;
      var input = label.querySelector("input");
      var wasSel = rec.selected.indexOf(key) !== -1;
      var isCorrect = q.correct.indexOf(key) !== -1;

      input.checked = wasSel;
      input.disabled = true;
      label.classList.add("locked");
      label.classList.remove("selected");

      if (wasSel && isCorrect) label.classList.add("correct");
      else if (wasSel && !isCorrect) label.classList.add("wrong");
      else if (isCorrect) label.classList.add("reveal");
    }

    var fb = document.getElementById("feedback");
    fb.textContent = rec.correct ? "Correct" : "Incorrect";
    fb.className = rec.correct ? "ok" : "bad";

    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "";
  }

  function renderScore() {
    if (backBtn) backBtn.style.display = "inline-flex";
    progressEl.textContent = "Result";
    main.innerHTML = "";

    var right = 0,
      wrong = 0;
    currentQuestions.forEach(function (q) {
      var a = state.answers[q.n];
      if (!a) return;
      if (a.correct) right++;
      else wrong++;
    });

    var title = document.createElement("h1");
    title.className = "q";
    title.textContent = "Result";
    main.appendChild(title);

    var total = document.createElement("p");
    total.className = "score";
    total.innerHTML = "<b>" + right + "</b> out of " + currentQuestions.length + " correct";
    main.appendChild(total);

    var c = document.createElement("p");
    c.className = "score good";
    c.innerHTML = "Correct: <b>" + right + "</b>";
    main.appendChild(c);

    var w = document.createElement("p");
    w.className = "score bad";
    w.innerHTML = "Wrong: <b>" + wrong + "</b>";
    main.appendChild(w);

    var controls = document.createElement("div");
    controls.className = "controls";
    var restart = document.createElement("button");
    restart.textContent = "Restart";
    restart.addEventListener("click", function () {
      if (state.lastMode === "full") {
        state.mode = "full";
        state.index = 0;
        state.answers = {};
        currentQuestions = Q.slice();
        save();
        render();
        return;
      }
      if (state.lastMode === "week" && state.lastWeek) {
        state.mode = "week";
        state.week = state.lastWeek;
        state.index = 0;
        state.answers = {};
        currentQuestions = getWeekQuestions(state.lastWeek);
        save();
        render();
        return;
      }
      state.mode = null;
      save();
      render();
    });
    controls.appendChild(restart);

    var home = document.createElement("button");
    home.textContent = "Home";
    home.addEventListener("click", function () {
      state.mode = null;
      save();
      render();
    });
    controls.appendChild(home);

    main.appendChild(controls);
  }

  function render() {
    if (!state.mode) {
      renderHome();
      return;
    }
    if (state.mode === "full") {
      currentQuestions = Q.slice();
      if (state.index >= currentQuestions.length) {
        renderScore();
        return;
      }
      renderQuestion();
      return;
    }
    if (state.mode === "week") {
      if (!state.week) {
        renderHome();
        return;
      }
      currentQuestions = getWeekQuestions(state.week);
      if (state.index >= currentQuestions.length) {
        renderScore();
        return;
      }
      renderQuestion();
      return;
    }
    renderHome();
  }

  if (backBtn) {
    backBtn.addEventListener("click", function () {
      state.mode = null;
      save();
      render();
    });
  }

  if (
    state.mode === null &&
    typeof state.index === "number" &&
    state.answers &&
    Object.keys(state.answers).length > 0
  ) {
    state.mode = "full";
    state.lastMode = "full";
    currentQuestions = Q.slice();
  }

  render();
})();
