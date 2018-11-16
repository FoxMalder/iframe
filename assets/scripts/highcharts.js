(function (H) {
    H.Series.prototype.point = {}; // The active point
    H.Chart.prototype.callbacks.push(function (chart) {
        $(chart.container).bind('mousemove', function () {
            var legendOptions = chart.legend.options,
                hoverPoints = chart.hoverPoints;

            if (!hoverPoints && chart.hoverPoint) {
                hoverPoints = [chart.hoverPoint];
            }
            if (hoverPoints) {
                H.each(hoverPoints, function (point) {
                    point.series.point = point;
                });
                H.each(chart.legend.allItems, function (item) {
                    item.legendItem.attr({
                        text: legendOptions.labelFormat ?
                            H.format(legendOptions.labelFormat, item) :
                            legendOptions.labelFormatter.call(item)
                    });
                });
                chart.legend.render();
            }
        });
    });
    // Hide the tooltip but allow the crosshair
    H.Tooltip.prototype.defaultFormatter = function () { return false; };
}(Highcharts));

Highcharts.theme = {

    lang: {
        loading: 'Загрузка...',
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        shortMonths: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'нояб', 'дек'],
        exportButtonTitle: "Экспорт",
        printButtonTitle: "Печать",
        rangeSelectorFrom: "С",
        rangeSelectorTo: "По",
        rangeSelectorZoom: "Период",
        downloadPNG: 'Скачать PNG',
        downloadJPEG: 'Скачать JPEG',
        downloadPDF: 'Скачать PDF',
        downloadSVG: 'Скачать SVG',
        printChart: 'Напечатать график',
        resetZoom: 'Отключить масштабирование'
    },

    colors: ['#ff0000', '#4285f4', '#ff9900'],

    chart: {
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        followPointer: false,
        marker: false,
        marginTop: 60
    },

    exporting: {
        enabled: false
    },

    title: {
        text: '',
        style: {
            display: 'none'
        }
    },

    plotOptions: {
        series: {
            marker: {
                symbol: 'circle'
            }
        }
    },

    xAxis: {
        // type: 'datetime',
        title: {
            text: ''
        },
        crosshair: {
            width: 1,
            color: '#e1e1e1'
        }
    },
    yAxis: {
        gridLineColor: '#f7f7f7',
        title: {
            text: ''
        },
        crosshair: {
            width: 1,
            color: '#e1e1e1'
        }
    },

    legend: {
        align: 'left',
        symbolHeight: 0,
        symbolWidth: 0,
        symbolRadius: 50,
        verticalAlign: 'top',
        symbolPadding: 10,
        useHTML:true,
        labelFormatter: function() {
            return '<div class="legend-graph" title="' + this.name + '-arrow"><div class="legend-graph_item"></div><span style="color: rgb(44, 49, 51);font-size: 14px;font-weight: 400;line-height: 1;">' + this.name +'</span><span style="color: rgb(44, 49, 51);font-size: 18px;font-weight: 400;line-height: 1;margin-top:8px;display:block;">' + this.point.y + '</span></div>';},
        x: 22,
        y: -15
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="background-color:{point.color};display:inline-block;width:8px;height:8px;border-radius:50%;position: relative;top:4px;margin-right:5px;">&nbsp;</span>{series.name}: <span style="color: rgb(44, 49, 51);font-family: Arial;font-size: 14px;font-weight: 400;">{point.y}</span><br>',
        backgroundColor: null,
        borderWidth: 0,
        shared: true,
        shadow: false,
        useHTML: true,
        style: {
            padding: 0
        },
    }
};

Highcharts.setOptions(Highcharts.theme);

// Поисковое продвижение
Highcharts.chart('graph-full', {
    chart: {
        type: 'line'
    },

    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e %b'
        }
    },

    series: [{
        name: 'Эффективность в Яндекс',
        total: '27 %',
        data: [
            [Date.UTC(2017,0,16),350],
            [Date.UTC(2017,0,17),590],
            [Date.UTC(2017,0,18),519],
            [Date.UTC(2017,0,19),364],
            [Date.UTC(2017,0,20),559],
            [Date.UTC(2017,0,21),242],
            [Date.UTC(2017,0,22),374],
            [Date.UTC(2017,0,23),572],
            [Date.UTC(2017,0,24),542],
            [Date.UTC(2017,0,25),698],
            [Date.UTC(2017,0,26),648],
            [Date.UTC(2017,0,27),600],
            [Date.UTC(2017,0,28),618],
            [Date.UTC(2017,0,29),576],
            [Date.UTC(2017,0,30),645],
            [Date.UTC(2017,0,31),701],
            [Date.UTC(2017,1,1),742]
        ]
    }, {
        name: 'Эффективность в Google',
        total: '25 %',
        data: [
            { x: Date.UTC(2017,0,19), y: 569, marker: { symbol: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACFElEQVQ4y62Vy08TURjFf/NoZTGuFLQqSUubsEEXFaJsqybGRAJK4U9w4cKVkDLrgilbWbpxp0VEWIqTuPNZE0NiTKg2UdMEdGVV6HRGFnemXjqj0Yknmc35zj1z7/e4VyEEuWIjDox63zBwBGgCH4FXwH3ggWUazc61SojZGFACMvwZG8C0ZRpLoYa5YkMDZoEp/g0lYMYyDQdAlwJRzJDWTLd3mCs2xoGyrIppcDEb4+yATrJbBaC25bK23mK1YmM7AeO8ZRqLileAKnDMj3TvV5id7KKvRw3d0rtNl2u3t/ne/CnTn4A+HcjLZnEd5ia7SHlmlfcOT6piO6fTGtmUxuM3rU4zgKPAhI5ojTZGsrG22cLDJkvP7Xbs3jOb/oTK27r7u3yO6sCQzJwZEHWq1Jw9ZgC9B1QcFzKHxA9brsirhEEdOCwzyYNC/HQjmPXCyD76E7/yutOCC6VvsiShIibgv0EF6jJR+yyOcCqjBcRzKztcufWD6qbQdBwXoK4Cr2Xm0XoLgGxS49JQbI/6wxeX470aaa9oa55WwgsdWAbGfWalYnP+hE6qR+XquTjDGS3QNiB6cbVidxouR27smTvbbH0NNHbaH708cFeORhi9Ccs0yvJtUwKuRyzuvGUaU36VfRSAmxHMFry1QPgFexm4wd9dsAXLNBZlUglTeoXKA2PAScTg+4l/iXgCymFPwC7+T7z20qmLVQAAAABJRU5ErkJggg==)' } },
            [Date.UTC(2017,0,20),349],
            [Date.UTC(2017,0,21),391],
            [Date.UTC(2017,0,22),379],
            [Date.UTC(2017,0,23),632],
            [Date.UTC(2017,0,24),641],
            [Date.UTC(2017,0,25),628],
            [Date.UTC(2017,0,26),630],
            [Date.UTC(2017,0,27),670],
            [Date.UTC(2017,0,28),618],
            [Date.UTC(2017,0,29),599],
            [Date.UTC(2017,0,30),699],
            [Date.UTC(2017,0,31),741],
            [Date.UTC(2017,1,1),792]
        ]
    }, {
        name: 'Переходов',
        total: '67 983',
        data: [
            [Date.UTC(2017,0,16),1405],
            [Date.UTC(2017,0,17),1398],
            [Date.UTC(2017,0,18),1199],
            [Date.UTC(2017,0,19),1238],
            [Date.UTC(2017,0,20),1349],
            [Date.UTC(2017,0,21),1462],
            [Date.UTC(2017,0,22),1474],
            [Date.UTC(2017,0,23),1243],
            [Date.UTC(2017,0,24),1310],
            [Date.UTC(2017,0,25),1398],
            [Date.UTC(2017,0,26),1277],
            [Date.UTC(2017,0,27),1392],
            [Date.UTC(2017,0,28),1187],
            [Date.UTC(2017,0,29),1387],
            [Date.UTC(2017,0,30),1287],
            [Date.UTC(2017,0,31),1187],
            [Date.UTC(2017,1,1),1587]
        ]
    }]
});

// Яндекс.Директ
Highcharts.chart('graph-yandex', {

    colors: ['#ff9900', '#ff0000'],

    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e %b'
        }
    },

    series: [{
        name: 'Показов',
        total: '2 569',
        data: [
            [Date.UTC(2017,0,16),350],
            [Date.UTC(2017,0,17),590],
            [Date.UTC(2017,0,18),519],
            [Date.UTC(2017,0,19),364],
            [Date.UTC(2017,0,20),559],
            [Date.UTC(2017,0,21),242],
            [Date.UTC(2017,0,22),374],
            [Date.UTC(2017,0,23),572],
            [Date.UTC(2017,0,24),542],
            [Date.UTC(2017,0,25),698],
            [Date.UTC(2017,0,26),648],
            [Date.UTC(2017,0,27),600],
            [Date.UTC(2017,0,28),618],
            [Date.UTC(2017,0,29),576],
            [Date.UTC(2017,0,30),645],
            [Date.UTC(2017,0,31),701],
            [Date.UTC(2017,1,1),742]
        ]
    }, {
        name: 'Переходов',
        total: '785',
        data: [
            [Date.UTC(2017,0,16),1405],
            [Date.UTC(2017,0,17),1398],
            [Date.UTC(2017,0,18),1199],
            [Date.UTC(2017,0,19),1238],
            [Date.UTC(2017,0,20),1349],
            [Date.UTC(2017,0,21),1462],
            [Date.UTC(2017,0,22),1474],
            [Date.UTC(2017,0,23),1243],
            [Date.UTC(2017,0,24),1310],
            [Date.UTC(2017,0,25),1398],
            [Date.UTC(2017,0,26),1277],
            [Date.UTC(2017,0,27),1392],
            [Date.UTC(2017,0,28),1187],
            [Date.UTC(2017,0,29),1387],
            [Date.UTC(2017,0,30),1287],
            [Date.UTC(2017,0,31),1187],
            [Date.UTC(2017,1,1),1587]
        ]
    }]
});

// Google AdWords
Highcharts.chart('graph-google', {
    colors: ['#ff9900', '#4285F4'],

    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e %b'
        }
    },

    series: [{
        name: 'Показов',
        total: '2 579',
        data: [
            [Date.UTC(2017,0,16),350],
            [Date.UTC(2017,0,17),590],
            [Date.UTC(2017,0,18),519],
            [Date.UTC(2017,0,19),364],
            [Date.UTC(2017,0,20),559],
            [Date.UTC(2017,0,21),242],
            [Date.UTC(2017,0,22),374],
            [Date.UTC(2017,0,23),572],
            [Date.UTC(2017,0,24),542],
            [Date.UTC(2017,0,25),698],
            [Date.UTC(2017,0,26),648],
            [Date.UTC(2017,0,27),600],
            [Date.UTC(2017,0,28),618],
            [Date.UTC(2017,0,29),576],
            [Date.UTC(2017,0,30),645],
            [Date.UTC(2017,0,31),701],
            [Date.UTC(2017,1,1),742]
        ]
    }, {
        name: 'Переходов',
        total: '761',
        data: [
            [Date.UTC(2017,0,16),1405],
            [Date.UTC(2017,0,17),1398],
            [Date.UTC(2017,0,18),1199],
            [Date.UTC(2017,0,19),1238],
            [Date.UTC(2017,0,20),1349],
            [Date.UTC(2017,0,21),1462],
            [Date.UTC(2017,0,22),1474],
            [Date.UTC(2017,0,23),1243],
            [Date.UTC(2017,0,24),1310],
            [Date.UTC(2017,0,25),1398],
            [Date.UTC(2017,0,26),1277],
            [Date.UTC(2017,0,27),1392],
            [Date.UTC(2017,0,28),1187],
            [Date.UTC(2017,0,29),1387],
            [Date.UTC(2017,0,30),1287],
            [Date.UTC(2017,0,31),1187],
            [Date.UTC(2017,1,1),1587]
        ]
    }]
});

// Эффективность работы
Highcharts.chart('graph-effective', {
    chart: {
        type: 'line'
    },

    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
});
