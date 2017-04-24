var echarts = require('echarts');
import {colorsFunc} from '../../../colors'

export default function(container, title, legend, data, showLegend = false, ringChart = false, optionCallback) {
    if (typeof(container) === 'string') {
        container = document.getElementById(container);
    }
    var chart = echarts.init(container);
    let option = {
        title: {
            text: title,
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: title ? "{a}<br/>{b}: {c} ({d}%)" : "{b}: {c} ({d}%)"
        },
        legend: {
            show: showLegend,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            data: legend
        },
        calculable: true,
        series: [{
            name: title,
            type: 'pie',
            radius: ringChart ? ['50%', '70%'] : '70%',
            center: ['50%', '50%'],
            itemStyle: {  
                normal: {  
                    label: {  
                        show: true,  
                        position: 'outer',  
                        formatter: "{b} : {d}%"  
                    },
                    color: colorsFunc
                }
            },    
            data: data
        }]
    };

    if (optionCallback) {
        optionCallback(option);
    }
    chart.setOption(option);

    return chart;
}
