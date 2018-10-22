/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v1.0.0
 */

(function ($) {
    'use strict';
	var table1,tablew=0,afterScroll=true,n = 1;//tablew记录上一次的table宽度；afterScroll记录上一次的table是否有滚动条
    var initResizable = function (that) {
        //Deletes the plugin to re-create it
        table1 = that.$el.parents('.fixed-table-container').find('table').eq(0);
        table1.colResizable({disable: true});

        //Creates the plugin
//      that.$el.colResizable({
        table1.colResizable({
            liveDrag: that.options.liveDrag,
//          fixed: that.options.fixed,
            headerOnly: that.options.headerOnly,
            minWidth: that.options.minWidth,
            hoverCursor: that.options.hoverCursor,
            dragCursor: that.options.dragCursor,
            onResize: that.onResize,
            onDrag: that.options.onResizableDrag
        });
//     var ths = table1.find('thead>tr>th');
////  	var that = $('#table2');
//  	var that = table1.parents('.fixed-table-container').find('table').eq(1);
//  	
//  	ths.each(function(index){
//  		var h = $(this).outerWidth()-1;
////  		$(this).find('.fht-cell').width();
//			$(this).find('.th-inner,.fht-cell').outerWidth(h);
//			that.find('.th-inner').eq(index).outerWidth(h);
//			that.find('.fht-cell').eq(index).outerWidth(h);
//  	})
		if(n==1){
			tablew = that.$el.width();n++;
		}
	BootstrapTable.prototype.onResize(e,true);
		
    };

    $.extend($.fn.bootstrapTable.defaults, {
        resizable: false,
        liveDrag: false,
        fixed: true,
        headerOnly: false,
        minWidth: 15,
        hoverCursor: 'e-resize',
        dragCursor: 'e-resize',
        onResizableResize: function (e) {
            return false;
        },
        onResizableDrag: function (e) {
            return false;
        }
    });

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _toggleView = BootstrapTable.prototype.toggleView,
        _resetView = BootstrapTable.prototype.resetView;

    BootstrapTable.prototype.toggleView = function () {
        _toggleView.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.resizable && this.options.cardView) {
            //Deletes the plugin
            $(this.$el).colResizable({disable: true});
        }
    };

    BootstrapTable.prototype.resetView = function () {
        var that = this;

        _resetView.apply(this, Array.prototype.slice.apply(arguments));

        if (this.options.resizable) {
            // because in fitHeader function, we use setTimeout(func, 100);
            setTimeout(function () {
                initResizable(that);
            }, 100);
        }
    };

    BootstrapTable.prototype.onResize = function (e,nn) {
//  	debugger
    	var ths = table1.find('thead>tr>th');
//  	var that = $('#table2');
    	var that = table1.parents('.fixed-table-container').find('table').eq(1);
    	table1.parents('.fixed-table-container').height()<that.height()?afterScroll==true:afterScroll==false;
    	
    	ths.each(function(index){
    		var h = $(this).outerWidth(false)-1;
    		var w0 =  that.width()-tablew;
//  		$(this).find('.fht-cell').width();
			$(this).find('.th-inner,.fht-cell').outerWidth(h);
			if(index==0) h++;
			if(index==(ths.size()-1)&&w0>0&&afterScroll){
////			debugger
                h -= w0;
//				h = that.offset().left + that.width() - that.find('thead th').eq(index).offset().left; 
				$(this).outerWidth(h+1);
				$(this).find('.th-inner').eq(index).outerWidth(h);
				$(this).find('.th-cell').eq(index).outerWidth(h);
			}
			that.find('thead th').eq(index).outerWidth(h);
			that.find('.th-inner').eq(index).outerWidth(h);
			that.find('.fht-cell').eq(index).outerWidth(h);
    	})
//      that.find('thead').html(table1.find('thead'));
//      that.find('thead>tr>th').eq(0).width('100px');
//      that.resetView();
if(!nn){
	that.data('bootstrap.table').options.onResizableResize.apply(e);
	
}
//      tablew = that.width();
        console.log(tablew);
        console.log(afterScroll);
        $('.fixed-table-header').css('maragin-right','0');
    }
})(jQuery);
