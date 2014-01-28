
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
      , template: '<div class="popover premium-popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><style type="text/css">.premium-popover{white-space:normal;display:block;overflow:visible}.premium-popover h3,.premium-popover p{text-align:center}.premium-popover [data-btr-icon].favicon{color:#09C;margin-right:5px}[class*=icon-premium-]{width:64px;height:64px;display:block;margin:10px auto;background:url(http://btrmisc.s3.amazonaws.com/images/premium-icons-sprite.png) no-repeat}.icon-premium-primetime{background-position:-256px 0}</style></div>'
      , title: '<span data-btr-icon="v" class="favicon"></span>Premium Feature'
      , content: '<p>Expose your show to a bigger audience with Prime Time Scheduling. Go live during our busiest time of the day when the most people are listening.</p><p align="center"><span class="icon-premium-primetime"></span></p><p><a href="{{link}}" class="btn btn-warning btn-large input-block-level">Go Premium Now</a></p>'
    })


    /* POPOVER NO CONFLICT
     * =================== */

    $.fn.btrUpgradePopover.noConflict = function () {
        $.fn.btrUpgradePopover = old
        return this
    }

}(window.jQuery);