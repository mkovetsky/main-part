import { Component, Input, Output, ElementRef, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
// import * as Croppie from 'croppie';
declare var $: any;
// declare var require: any;
// const Croppie = require('croppie');
// const Croppie = require('../../../../node_modules/@types/croppie/index');
@Component({
    selector: 'app-croppie',
    templateUrl: './croppie.html',
})
export class CroppieComponent implements OnInit, AfterViewInit {
    private el: ElementRef;
    basic: any;

    @Input() Image = '';
    @Input() ShowZoomer = true;
    @Output() OnCropped = new EventEmitter<any>();

    constructor(el: ElementRef) {
        this.el = el;
    }
    ngOnInit() {
        console.log('on init');
    }

    ngAfterViewInit() {
        if (this.Image !== '') {
            this.basic = $('#croppie-demo').croppie({
                viewport: { width: 200, height: 200 },
                boundary: { width: 300, height: 300 },
                showZoomer: this.ShowZoomer,
                enableOrientation: true,
                enforceBoundary: true
            });
            this.basic.croppie('bind', {
                url: this.Image,
                // points: [77, 469, 280, 739]
            });
        }
        /* const crp = new Croppie(this.el.nativeElement.id, {
            viewport: { width: 100, height: 100 },
            boundary: { width: 300, height: 300 },
            showZoomer: false,
            enableOrientation: true
        });
        console.log(crp);*/
    }

    crop() {
        console.log('crop button clicked');
        const componentReference = this;
        this.basic.croppie('result', {
            type: 'canvas',
            /*size: size,
            resultSize: {
                width: 50,
                height: 50
            }*/
        }).then(function (resp) {
            console.log('response is');
            console.log(resp);
            componentReference.OnCropped.emit({ image: resp });
        });
    }
}
