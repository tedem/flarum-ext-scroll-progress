/*!
 * This file is part of tedem/flarum-ext-scroll-progress.
 *
 * Copyright (c) 2021 Medet "tedem" Erdal.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

app.initializers.add("tedem/flarum-ext-scroll-progress", () => {
  document.body.innerHTML +=
    '<div class="scroll-progress" aria-hidden="true"></div>';

  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight",
    progress = document.querySelector(".scroll-progress"),
    scroll;

  document.addEventListener("scroll", function () {
    scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    progress.style.setProperty("--scroll-progress-value", scroll + "%");
  });
});
