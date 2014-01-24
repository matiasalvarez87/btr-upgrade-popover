
!function ($) {

    "use strict"; // jshint ;_;


    /* BTR UPGRADE POPOVER PUBLIC CLASS DEFINITION
     * =============================== */

    var BtrUpgradePopover = function (element, options) {
        this.init('btrUpgradePopover', element, options)
    }


    /* NOTE: BTR UPGRADE POPOVER EXTENDS BOOTSTRAP-POPOVER.js
       ========================================== */

    BtrUpgradePopover.prototype = $.extend({}, $.fn.popover.Constructor.prototype, {

        constructor: BtrUpgradePopover,
    
        setContent: function () {

            // Sets the link value into the content
            this.options.content = this.options.content.replace('{{link}}', this.options.link)

            $.fn.popover.Constructor.prototype.setContent.call(this)
        }

    })


    /* BTR UPGRADE POPOVER PLUGIN DEFINITION
     * ======================= */

    var old = $.fn.btrUpgradePopover

    $.fn.btrUpgradePopover = function (option) {
        return this.each(function () {
            var $this = $(this)
              , data = $this.data('btrUpgradePopover')
              , options = typeof option == 'object' && option
            if (!data) $this.data('btrUpgradePopover', (data = new BtrUpgradePopover(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.btrUpgradePopover.Constructor = BtrUpgradePopover

    $.fn.btrUpgradePopover.defaults = $.extend({}, $.fn.popover.defaults, {
        html: true
      , placement: 'right'
      , template: '<!--TEMPLATE-->'
      , title: '<!--TITLE-->'
      , content: '<!--CONTENT-->'
    })


    /* POPOVER NO CONFLICT
     * =================== */

    $.fn.btrUpgradePopover.noConflict = function () {
        $.fn.btrUpgradePopover = old
        return this
    }

}(window.jQuery);