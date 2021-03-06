import { Component, Input, OnInit } from '@angular/core';

declare const Plotly: any;

@Component({
  selector: 'app-plotly-graph',
  templateUrl: './plotly-graph.component.html',
  styleUrls: ['./plotly-graph.component.css']
})
export class PlotlyGraphComponent implements OnInit {
  @Input('_2fr')    _2fr!:   number[];
  @Input('_2fz')    _2fz!:   number[];
  @Input('_at')     _at!:    number[];
  @Input('_curr')   _curr!:  number[];
  @Input('_fr')     _fr!:    number[];
  @Input('_fz')     _fz!:    number[];
  @Input('_im')     _im!:    number[];
  @Input('_power')  _power!: number[];
  @Input('_rc')     _rc!:    number[];
  @Input('_volt')   _volt!:  number[];
  @Input('ns')      ns!:     string;

  @Input('time') time!: number[];

  // fzOnMax!: number[];
  // fzOnMin!: number[];
  // frMax!: number[];
  // frMin!: number[];
  timeForLimits!: number[];

   // TempFZON_max = -15
    // TempFZON_min = -28
    // TempFR_max = 10
    // TempFR_min = 0


  constructor() { }

  ngOnInit(): void {
    const start = this.time[0]
    const end = this.time[this.time.length - 1]
    const lineDiv = document.getElementById('line-chart');

    this.timeForLimits = [start, end];

    const trace_fzOnMax = {
     x: this.timeForLimits,
     y: [-15, -15],
     type: 'scatter',
     name: 'fzOnMax',
     line: {
        width: 1,
        dash: 'dashdot',
        color: 'rgb(255, 87, 51)'
        }
   };

   const trace_fzOnMin = {
     x: this.timeForLimits,
     y: [-28, -28],
     type: 'scatter',
     name: 'fzOnMax',
     line: {
        width: 1,
        dash: 'dashdot',
        color: 'rgb(255, 87, 51)'
        }
   };

   const trace_frMax = {
     x: this.timeForLimits,
     y: [10, 10],
     type: 'scatter',
     name: 'fzOnMax',
     line: {
        width: 1,
        dash: 'dashdot',
        color: 'rgb(255, 87, 51)'
        }
   };

   const trace_frMin = {
     x: this.timeForLimits,
     y: [0, 0],
     type: 'scatter',
     name: 'fzOnMax',
     line: {
        width: 1,
        dash: 'dashdot',
        color: 'rgb(255, 87, 51)'
        }
   };

    const trace_2fr = {
     x: this.time,
     y: this._2fr,
     type: 'scatter',
     name: '2fr'
   };

    const trace_2fz = {
     x: this.time,
     y: this._2fz,
     type: 'scatter',
     name: '2fz'
   };

    const trace_fr = {
     x: this.time,
     y: this._fr,
     type: 'scatter',
     name: 'fr'
   };

    const trace_fz = {
     x: this.time,
     y: this._fz,
     type: 'scatter',
     name: 'fz',
      marker: {
        symbol: 'star',
        with: 10
      }
   };

    const trace_at = {
     x: this.time,
     y: this._at,
     type: 'scatter',
     name: 'at'
   };

    const trace_curr = {
     x: this.time,
     y: this._curr,
     type: 'scatter',
     name: 'curr'
   };

    const trace_im = {
     x: this.time,
     y: this._im,
     type: 'scatter',
     name: 'im'
   };

    const trace_power = {
     x: this.time,
     y: this._power,
     type: 'scatter',
     name: 'power'
   };

    const trace_rc = {
     x: this.time,
     y: this._rc,
     type: 'scatter',
     name: 'rc',
    //  fill: 'tonexty',
     marker: {
       symbol: 'circle',
       size: 10
     }
   };

    const trace_volt = {
     x: this.time,
     y: this._volt,
     type: 'scatter',
     name: 'volt',
     marker: {
      symbol: 'circle',
      size: 10
    }
   };


    const data = [
                  trace_2fr,
                  trace_2fz,
                  trace_fr,
                  trace_fz,
                  trace_at,
                  trace_curr,
                  trace_im,
                  trace_power,
                  trace_rc,
                  trace_volt,
                  trace_fzOnMax,
                  trace_fzOnMin,
                  trace_frMax,
                  trace_frMin
                ];


                // range=[1.5, 4.5]

    const layout = {
    //  title:`[${ this.ns }]`,
     plot_bgcolor: 'rgba(0,0,0,1)',
     yaxis: {
      // rangemode: 'tozero'
      // range: [1.5, 45]
    }
   };

    return new Plotly.plot( lineDiv, data, layout,  {displaylogo: false} );
  }

}
