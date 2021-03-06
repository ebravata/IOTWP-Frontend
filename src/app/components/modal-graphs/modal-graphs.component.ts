import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalzeusService } from 'src/app/services/calzeus.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-graphs',
  templateUrl: './modal-graphs.component.html',
  styles: [
  ]
})
export class ModalGraphsComponent implements OnInit, OnDestroy {

  public subscriber!: Subscription;
  public loadData= true;

  public cargando: boolean = true;
  public loadingError: any;
  public num_serie= '';
  public model= '';
  public test_start= '';
  public test_stop= '';

  public time!:   number[];
  public _2fr!:   number[];
  public _2fz!:   number[];
  public _at!:    number[];
  public _curr!:  number[];
  public _fr!:    number[];
  public _fz!:    number[];
  public _im!:    number[];
  public _power!: number[];
  public _rc!:    number[];
  public _volt!:  number[];



  constructor( public modalServ: ModalService,
               public calzeusServ: CalzeusService) { }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy');

    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {


    const subscriber = this.modalServ.lanzarQuery()
                      .subscribe({
                        next: (val) => {

                                if ( this.loadData && val){
                                    this.getReport();
                                    this.loadData = false;
                                }
                              }
                      });
  }

  cerrarModal(){
    this.modalServ.cerrarModal();
    this.cargando= true;
    this.loadData = true;
    this.loadingError= null;
  }

  getReport(){

     this.calzeusServ.getReport()
        .subscribe({

          next: ( data: any )=>{

              this.time     = data.time;
              this._2fr     = data._2fr;
              this._2fz     = data._2fz;
              this._at      = data._at;
              this._curr    = data._curr;
              this._fr      = data._fr;
              this._fz      = data._fz;
              this._im      = data._im;
              this._power   = data._power;
              this._rc      = data._rc;
              this._volt    = data._volt;

              this.num_serie= this.calzeusServ.dataTest.serial_number;
              this.test_start = this.calzeusServ.dataTest.range_start;
              this.test_stop = (this.time[ this.time.length -1]).toString();
              this.model = this.calzeusServ.dataTest.model;

          },
          complete: () => {
            this.cargando = false;
          },
          error: (err) => {
            this.loadingError= err.error.error;
            this.cargando = false;
          }
          })
  }
}

