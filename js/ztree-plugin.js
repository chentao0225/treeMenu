~(function ($) {
  function ztree(data) {
    let $this = $(this),
      count = 0;
    let bindHTML = function (data) {
      let str = ``;
      data.forEach((item) => {
        count++;
        let { name, open, children } = item;
        str += `<li>
                    <a href="javascrip:;" class="title">${name}</a>
                    ${
                      children
                        ? `
                        <em class="icon ${open ? "open" : ""}"></em>
                        <ul class="level level${count}" style="display:${
                            open ? "block" : "none"
                          }">
                            ${bindHTML(children)} 
                        </ul>
                    `
                        : ""
                    }
                </li>`;
        count--;
      });
      return str;
    };
    $this.html(bindHTML(data));
    $this.click(function (ev) {
      let target = ev.target,
        $target = $(target),
        $next = $target.next("ul");
      if (target.tagName === "EM") {
        $target.toggleClass("open");
        $next.stop().slideToggle(100);
      }
    });
  }

  $.fn.extend({
    ztree,
  });
})(jQuery);
