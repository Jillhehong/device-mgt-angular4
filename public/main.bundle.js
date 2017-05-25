webpackJsonp([1,4],{

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_device_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDeviceHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditDeviceHistoryComponent = (function () {
    function EditDeviceHistoryComponent(deviceService, activeModal) {
        var _this = this;
        this.deviceService = deviceService;
        this.activeModal = activeModal;
        this.deviceOwner = [];
        this.styles = { history_date_style: null, replaced_device_SN_style: null };
        this.formatter = function (x) { return x.device_owner; };
        // typeahead
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.deviceOwner.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
    }
    EditDeviceHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = this.deviceService.getDeviceHistorySelectOptions();
        // get device owner
        this.deviceService.getData(this.deviceService.Api + '/deviceHistory/get/deviceOwner').subscribe(function (res) {
            res.forEach(function (value) {
                _this.deviceOwner.push(value.device_owner);
            });
        }, function (err) { return console.log(err); });
    };
    EditDeviceHistoryComponent.prototype.update = function (value) {
        var _this = this;
        // validate date
        var pattern = new RegExp("^\d{4}-\d{1,2}-\d{1,2}$");
        if (!pattern.test(value.history_date)) {
            this.error = 'please input date format yyyy-mm-dd';
            this.styles.history_date_style = { 'background-color': 'pink' };
        }
        else if (value.replace_device == 'Y' && !value.replaced_device_SN) {
            this.error = 'replaced device SN is required';
            this.styles.replaced_device_SN_style = { 'background-color': 'pink' };
        }
        else {
            //convert empty value into null
            Object.keys(value).forEach(function (key) {
                if (value[key] == '') {
                    value[key] = null;
                }
            });
            this.deviceService.postData(this.deviceService.Api + '/deviceHistory/update', value).subscribe(function (res) {
                _this.activeModal.close();
            }, function (err) {
                _this.error = err;
            });
        }
    };
    return EditDeviceHistoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditDeviceHistoryComponent.prototype, "data", void 0);
EditDeviceHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-device-history',
        template: __webpack_require__(482)
        // styleUrls: ['./device-mgt.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_device_service__["a" /* DeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _b || Object])
], EditDeviceHistoryComponent);

var _a, _b;
//# sourceMappingURL=edit.modal.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_device_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertDeviceHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InsertDeviceHistoryComponent = (function () {
    function InsertDeviceHistoryComponent(deviceService, activeModal) {
        var _this = this;
        this.deviceService = deviceService;
        this.activeModal = activeModal;
        this.deviceOwner = [];
        this.data = {};
        this.styles = { history_date_style: null, replaced_device_SN_style: null };
        this.formatter = function (x) { return x.device_owner; };
        // typeahead
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .map(function (term) { return term === '' ? []
                : _this.deviceOwner.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
    }
    InsertDeviceHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = this.deviceService.getDeviceHistorySelectOptions();
        // get device owner
        this.deviceService.getData(this.deviceService.Api + '/deviceHistory/get/deviceOwner').subscribe(function (res) {
            res.forEach(function (value) {
                _this.deviceOwner.push(value.device_owner);
            });
        }, function (err) { return console.log(err); });
    };
    InsertDeviceHistoryComponent.prototype.add = function (value) {
        var _this = this;
        // validate date
        var pattern = new RegExp("^\d{4}-\d{1,2}-\d{1,2}$");
        if (!pattern.test(value.history_date)) {
            this.error = 'please input date format yyyy-mm-dd';
            this.styles.history_date_style = { 'background-color': 'pink' };
        }
        else if (value.replace_device == 'Y' && !value.replaced_device_SN) {
            this.error = 'replaced device SN is required';
            this.styles.replaced_device_SN_style = { 'background-color': 'pink' };
        }
        else {
            //convert empty value into null
            Object.keys(value).forEach(function (key) {
                if (value[key] == '') {
                    value[key] = null;
                }
            });
            // post data
            this.deviceService.postData(this.deviceService.Api + '/deviceHistory/insert', value).subscribe(function (res) {
                _this.activeModal.close();
            }, function (err) {
                _this.error = err;
            });
        }
    };
    return InsertDeviceHistoryComponent;
}());
InsertDeviceHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-insert-device-history',
        template: __webpack_require__(483)
        // styleUrls: ['./device-mgt.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_device_service__["a" /* DeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _b || Object])
], InsertDeviceHistoryComponent);

var _a, _b;
//# sourceMappingURL=insert.modal.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_device_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDeviceManagementModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditDeviceManagementModalComponent = (function () {
    function EditDeviceManagementModalComponent(activeModal, deviceService) {
        var _this = this;
        this.activeModal = activeModal;
        this.deviceService = deviceService;
        this.parent_clinic = []; // define type and initialize an empty value so that you can use its push method below
        this.sub_clinic = [];
        this.styles = { checked_out_date: '', checked_in_date: '', wyless_provision_date: '', registration_date: '',
            device_test_date: '', device_suspension_date: '', lease_start_date: '', lease_end_date: '' };
        this.searchParentClinic = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.parent_clinic.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        this.searchSubClinic = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.sub_clinic.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
    }
    EditDeviceManagementModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = this.deviceService.getDeviceMgtSelectOptions();
        // get parent_clinic
        this.deviceService.getData(this.deviceService.Api + '/deviceMgt/get/parent_clinic').subscribe(function (res) {
            console.log('test');
            console.log(_this.parent_clinic);
            res.forEach(function (value) { return _this.parent_clinic.push(value.parent_clinic); });
        }, function (res) { return console.log(res); });
        //get sub clinic
        this.deviceService.getData(this.deviceService.Api + '/deviceMgt/get/sub_clinic').subscribe(function (res) {
            res.forEach(function (value) { return _this.sub_clinic.push(value.sub_clinic); });
        }, function (res) { return console.log(res); });
    };
    EditDeviceManagementModalComponent.prototype.update = function (value) {
        var _this = this;
        // let error: string;
        // validation
        // Object.keys(value).forEach( key=> {
        //   if(key.indexOf('date') !== -1 && !moment(value[key], 'YYYY-MM-DD', true).isValid()) {
        //     this.styles[key] = {'background-color': '#f2dede'};
        //   }
        // });
        //convert empty value into null
        Object.keys(value).forEach(function (key) {
            if (value[key] == '') {
                value[key] = null;
                console.log(value[key]);
            }
        });
        this.deviceService.postData(this.deviceService.Api + '/deviceMgt/update', value)
            .subscribe(function (res) {
            console.log('test ', res);
            _this.activeModal.close();
        }, function (err) {
            console.log(err);
            _this.error = err.statusText + '. Check your input (eg: date format: yyyy-mm-dd)';
            console.log(err);
        });
    };
    return EditDeviceManagementModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditDeviceManagementModalComponent.prototype, "data", void 0);
EditDeviceManagementModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-device-management-modal',
        template: __webpack_require__(486),
        styles: [__webpack_require__(423)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_device_service__["a" /* DeviceService */]) === "function" && _b || Object])
], EditDeviceManagementModalComponent);

var _a, _b;
//# sourceMappingURL=edit-device-mgt-modal.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_device_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertDeviceMgtModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {DatePipe} from '../../../../shared/date.pipe';
var InsertDeviceMgtModalComponent = (function () {
    function InsertDeviceMgtModalComponent(activeModal, deviceService) {
        var _this = this;
        this.activeModal = activeModal;
        this.deviceService = deviceService;
        this.parent_clinic = [];
        this.sub_clinic = [];
        this.data = {};
        this.styles = { checked_out_date: '', checked_in_date: '', wyless_provision_date: '', registration_date: '',
            device_test_date: '', device_suspension_date: '', lease_start_date: '', lease_end_date: '' };
        this.searchParentClinic = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.parent_clinic.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        this.searchSubClinic = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.sub_clinic.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        // this.parent_clinic = this.bind(this);
    }
    InsertDeviceMgtModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = this.deviceService.getDeviceMgtSelectOptions();
        // initialize data input for ngModel
        this.deviceService.getDeviceMgtColumns().forEach(function (value) {
            _this.data[value] = null;
        });
        // get parent clinic
        this.deviceService.getData(this.deviceService.Api + '/deviceMgt/get/parent_clinic').subscribe(function (res) {
            // this.parent_clinic = res;
            res.forEach(function (value) {
                // console.log('test');
                _this.parent_clinic.push(value.parent_clinic);
            });
            console.log('test');
            console.log(_this.parent_clinic);
        }, function (err) {
            console.log(err);
        });
        // get sub clinic
        this.deviceService.getData(this.deviceService.Api + '/deviceMgt/get/sub_clinic').subscribe(function (res) {
            // this.sub_clinic = res;
            res.forEach(function (value) {
                _this.sub_clinic.push(value.sub_clinic);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ;
    // searchSubClinic() {
    //
    // }
    InsertDeviceMgtModalComponent.prototype.insert = function (value) {
        var _this = this;
        console.log('test');
        console.log('test', value);
        this.deviceService.postData(this.deviceService.Api + '/deviceMgt/insert', value)
            .subscribe(function (res) {
            console.log('test ', res);
            _this.activeModal.close();
        }, function (err) {
            console.log(err);
            _this.error = err.statusText + '. Check your input';
            console.log(err);
        });
    };
    return InsertDeviceMgtModalComponent;
}());
InsertDeviceMgtModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-insert-device-mgt-modal',
        template: __webpack_require__(487),
        styles: [__webpack_require__(424)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_device_service__["a" /* DeviceService */]) === "function" && _b || Object])
], InsertDeviceMgtModalComponent);

var _a, _b;
//# sourceMappingURL=insert-device-mgt-modal.component.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceService = (function () {
    function DeviceService(http) {
        this.http = http;
        this.Api = 'http://localhost:3000';
        this.device_Mgt_table_columns = [
            'purchase_order',
            'registration_date',
            'device_sn',
            'iccid',
            'imei',
            'model_number',
            'model_description',
            'firmware_version',
            'manufacturer',
            'points_to',
            'use_zywie_sim',
            'sim_provider',
            'zywie_logo',
            'wyless_provision_date',
            'device_test_date',
            'device_suspension_date',
            'status',
            'location',
            'checked_out_by',
            'checked_out_date',
            'checked_in_by',
            'checked_in_date',
            'salesteam',
            'salesperson_name',
            'enterprise_id',
            'parent_clinic',
            'sub_clinic',
            'physician',
            'billable',
            'lease',
            'lease_price_per_month',
            'lease_start_date',
            'lease_end_date'
        ];
        this.device_inventory_table_columns = [
            'received_date',
            'order_id',
            'purchase_order',
            'manufacturer',
            'item',
            'order_quantity',
            'received_quantity',
            'deficiency_quantity',
            'deficiency_received_date',
            'shipping_status',
            'device_sn',
            'package_content'
        ];
        this.accessory_inventory_table_columns = [
            'row',
            'received_date',
            'manufacturer_order_ID',
            'purchase_order',
            'manufacturer',
            'accessory',
            'lot_no',
            'order_quantity',
            'received_quantity',
            'deficiency',
            'deficient_received_date',
            'shipping_status',
            'total_price'
        ];
        this.device_history_table_columns = [
            'row',
            'history_date',
            'device_sn',
            'device_action',
            'by_whom',
            'status',
            'device_owner',
            'replace_device',
            'replaced_device_sn',
            'note'
        ];
        // select options data in device management page
        this.selectOptions = {
            devidceMgtoptions: {
                model_description: ['Aera CT 2G', 'Aera CT 3G'],
                firmware_version: ['V2.8', 'V2.7', 'V2.6', 'V2.5'],
                manufacturer: ['TZ Medical'],
                points_to: ['AWS-Prod', 'AWS-Dev'],
                yesOrNo: ['Y', 'N'],
                sim_provider: ['AT&T', 'Wyless AT&T', 'Wyless T-Mobile'],
                salesteam: ['Zywie', 'eLab Solutions', 'Health Fusion distributor'],
                status: [
                    'Beta Site',
                    'Clinical Trials',
                    'Customer',
                    'Decommissioned',
                    'Defective',
                    'Inventory-Active',
                    'Inventory-Inactive',
                    'Inventory-Suspended',
                    'Refurbished',
                    'RMA',
                    'Sales - Out',
                    'Development',
                    'Sales Demo',
                    'Troubleshooting',
                    'SIM Switch',
                    'Los'
                ],
                location: [
                    'Drawer1-Active',
                    'Drawer2-Accessory',
                    'Drawer3-Suspended',
                    'Drawer4-Inactive(Misc)',
                    'Device-Out-RMA',
                    'Device-Out-Others',
                    'Development',
                    'Shelf-A-pre-order',
                    'Shelf-B-pre-order',
                    'Shelf-C-pre-order',
                    'Shelf-D-pre-order'
                ],
                checked_by: ['Alex Armstrong', 'Emir Muhovic', 'Latha Ganeshan', 'Sameer Adumala', 'Steve Rode']
            },
            deviceHistoryOptions: {
                device_action: [
                    'Inventory-Inactive',
                    'Checked In',
                    'Checked Out',
                    'Decommissioned',
                    'Defective',
                    'Return-RMA',
                    'Sales Demo'
                ],
                by_whom: [
                    'Alex Armstrong',
                    'Emir Muhovic',
                    'Latha Ganeshan',
                    'Sameer Adumala'
                ],
                status: [
                    'Beta Site',
                    'Clinical Trials',
                    'Customer',
                    'Decommissioned',
                    'Defective',
                    'Inventory-Active',
                    'Inventory-Inactive',
                    'Inventory-Suspended',
                    'Refurbished',
                    'RMA',
                    'Sales - Out',
                    'Development',
                    'Sales Demo',
                    'Troubleshooting',
                    'SIM Switch',
                    'Lost'
                ],
                YesOrNo: [
                    'Y',
                    'N'
                ]
            }
        };
        this.deviceHistory = {};
    }
    DeviceService.prototype.getDeviceMgtColumns = function () {
        return this.device_Mgt_table_columns;
    };
    DeviceService.prototype.getDeviceHistoryColumns = function () {
        return this.device_history_table_columns;
    };
    DeviceService.prototype.getDeviceInventoryColumns = function () {
        return this.device_inventory_table_columns;
    };
    DeviceService.prototype.getAccessoryInventoryColumns = function () {
        return this.accessory_inventory_table_columns;
    };
    DeviceService.prototype.getDeviceMgtSelectOptions = function () {
        return this.selectOptions.devidceMgtoptions;
    };
    DeviceService.prototype.getDeviceHistorySelectOptions = function () {
        return this.selectOptions.deviceHistoryOptions;
    };
    // http service
    DeviceService.prototype.getData = function (url) {
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__["Observable"].throw(error); });
    };
    ;
    DeviceService.prototype.postData = function (url, data) {
        return this.http.post(url, data)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_rx__["Observable"].throw(err); });
    };
    return DeviceService;
}());
DeviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DeviceService);

var _a;
//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 312;


/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(336);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(477),
        styles: [__webpack_require__(416)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_mgt_device_management_device_mgt_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__device_mgt_device_history_device_history_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__device_mgt_device_inventory_device_inventory_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__device_mgt_accessory_inventory_accessory_inventory_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__device_mgt_customer_management_customer_management_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__device_mgt_dashboard_dashboard_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__device_mgt_signup_signup_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__device_mgt_login_login_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__device_mgt_homepage_homepage_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_device_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ng_bootstrap_ng_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__device_mgt_public_public_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_smart_table__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__device_mgt_device_management_modal_edit_deviceMgt_modal_edit_device_mgt_modal_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_pagination__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__device_mgt_device_management_modal_insert_device_mgt_modal_insert_device_mgt_modal_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__test_test_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__device_mgt_device_history_edit_edit_modal__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__device_mgt_device_history_insert_insert_modal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_shared_variables__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_charts__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // import ui-router







 // import signup page
 // import login page

 // import service
 // import ng-bootstrap

 // import ng2-smart-table

 // <-- import the module







// import { TypeaheadModule  } from 'ngx-bootstrap';
var routes = { states: [
        { name: 'public', abstract: true, component: __WEBPACK_IMPORTED_MODULE_17__device_mgt_public_public_component__["a" /* PublicComponent */] },
        { name: 'public.home', url: '/home', component: __WEBPACK_IMPORTED_MODULE_14__device_mgt_homepage_homepage_component__["a" /* HomepageComponent */] },
        { name: 'public.dashboard', url: '/dashboard', component: __WEBPACK_IMPORTED_MODULE_11__device_mgt_dashboard_dashboard_component__["a" /* DashboardComponent */] },
        { name: 'public.deviceManagement', url: '/deviceManagement', component: __WEBPACK_IMPORTED_MODULE_6__device_mgt_device_management_device_mgt_component__["a" /* DeviceManagementComponent */] },
        { name: 'public.deviceHistory', url: '/deviceHistory', component: __WEBPACK_IMPORTED_MODULE_7__device_mgt_device_history_device_history_component__["a" /* DeviceHistoryComponent */] },
        { name: 'public.editDeviceHistory', url: '/deviceHistory/edit', component: __WEBPACK_IMPORTED_MODULE_23__device_mgt_device_history_edit_edit_modal__["a" /* EditDeviceHistoryComponent */] },
        { name: 'public.insertDeviceHistory', url: '/deviceHistory/insert', component: __WEBPACK_IMPORTED_MODULE_24__device_mgt_device_history_insert_insert_modal__["a" /* InsertDeviceHistoryComponent */] },
        { name: 'public.deviceInventory', url: '/deviceInventory', component: __WEBPACK_IMPORTED_MODULE_8__device_mgt_device_inventory_device_inventory_component__["a" /* DeviceInventoryComponent */] },
        { name: 'public.accessoryInventory', url: '/accessoryInventory', component: __WEBPACK_IMPORTED_MODULE_9__device_mgt_accessory_inventory_accessory_inventory_component__["a" /* AccessoryInventoryComponent */] },
        { name: 'public.customerManagement', url: '/customerManagement', component: __WEBPACK_IMPORTED_MODULE_10__device_mgt_customer_management_customer_management_component__["a" /* CustomerManagementComponent */] },
        { name: 'login', url: '/login', component: __WEBPACK_IMPORTED_MODULE_13__device_mgt_login_login_component__["a" /* LoginComponent */] },
        { name: 'signup', url: '/signup', component: __WEBPACK_IMPORTED_MODULE_12__device_mgt_signup_signup_component__["a" /* SignupComponent */] }
    ] };
//
// /** UIRouter Config  */
// export function uiRouterConfigFn(router: UIRouter) {
//   // If no URL matches, go to the `hello` state by default
//   router.urlService.rules.otherwise({ state: 'home' });
//
// }
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__device_mgt_device_management_device_mgt_component__["a" /* DeviceManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_7__device_mgt_device_history_device_history_component__["a" /* DeviceHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_8__device_mgt_device_inventory_device_inventory_component__["a" /* DeviceInventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__device_mgt_accessory_inventory_accessory_inventory_component__["a" /* AccessoryInventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__device_mgt_customer_management_customer_management_component__["a" /* CustomerManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_11__device_mgt_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__device_mgt_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_13__device_mgt_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__device_mgt_homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__device_mgt_public_public_component__["a" /* PublicComponent */],
            __WEBPACK_IMPORTED_MODULE_19__device_mgt_device_management_modal_edit_deviceMgt_modal_edit_device_mgt_modal_component__["a" /* EditDeviceManagementModalComponent */],
            __WEBPACK_IMPORTED_MODULE_21__device_mgt_device_management_modal_insert_device_mgt_modal_insert_device_mgt_modal_component__["a" /* InsertDeviceMgtModalComponent */],
            __WEBPACK_IMPORTED_MODULE_22__test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_23__device_mgt_device_history_edit_edit_modal__["a" /* EditDeviceHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_24__device_mgt_device_history_insert_insert_modal__["a" /* InsertDeviceHistoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18_ng2_smart_table__["a" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_20_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_27_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__["UIRouterModule"].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_16__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            // TypeaheadModule.forRoot()
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_19__device_mgt_device_management_modal_edit_deviceMgt_modal_edit_device_mgt_modal_component__["a" /* EditDeviceManagementModalComponent */],
            __WEBPACK_IMPORTED_MODULE_21__device_mgt_device_management_modal_insert_device_mgt_modal_insert_device_mgt_modal_component__["a" /* InsertDeviceMgtModalComponent */],
            __WEBPACK_IMPORTED_MODULE_23__device_mgt_device_history_edit_edit_modal__["a" /* EditDeviceHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_24__device_mgt_device_history_insert_insert_modal__["a" /* InsertDeviceHistoryComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__service_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_25__shared_shared_variables__["a" /* SharedVariables */], __WEBPACK_IMPORTED_MODULE_26__angular_common__["a" /* Location */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessoryInventoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccessoryInventoryComponent = (function () {
    function AccessoryInventoryComponent() {
    }
    AccessoryInventoryComponent.prototype.ngOnInit = function () {
    };
    return AccessoryInventoryComponent;
}());
AccessoryInventoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-accessory-inventory',
        template: __webpack_require__(478),
        styles: [__webpack_require__(417)]
    }),
    __metadata("design:paramtypes", [])
], AccessoryInventoryComponent);

//# sourceMappingURL=accessory-inventory.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_device_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerManagementComponent = (function () {
    function CustomerManagementComponent(deviceService) {
        this.deviceService = deviceService;
        this.panelState = [];
        this.test = 0;
    }
    CustomerManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceService.getData(this.deviceService.Api + '/customerMgt/get').subscribe(function (res) {
            _this.customerData = res;
            var counts = 0;
            res.forEach(function (value) {
                counts = counts + Number(value.totaldevices); // Number() convert string to number
            });
            _this.totalDevices = counts;
        }, function (err) { return console.log(err); });
    };
    // accordionState(event, index) {
    //   this.panelState[index] = event.nextState;
    // }
    CustomerManagementComponent.prototype.rightClick = function (event) {
        console.log(event);
        this.test++;
        return event.preventDefault();
    };
    return CustomerManagementComponent;
}());
CustomerManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer-management',
        template: __webpack_require__(479),
        styles: [__webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_device_service__["a" /* DeviceService */]) === "function" && _a || Object])
], CustomerManagementComponent);

var _a;
//# sourceMappingURL=customer-management.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_device_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(deviceService) {
        this.deviceService = deviceService;
        this.orders = { total_ordered_qty: null, total_received_qty: null, total_deficiency_qty: null };
        this.billable = {
            datasets: [{ data: [] }],
            labels: [],
            colors: [{
                    backgroundColor: ['#82C456', '#D3D3D3']
                }],
            isDataAvailable: false,
            options: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    fontSize: 16,
                    text: 'billable vs Non-billable devices'
                },
                responsive: true,
                maintainAspectRatio: false
            }
        };
        this.status = {
            datasets: [{ data: [], label: 'count' }],
            labels: [],
            colors: [
                { backgroundColor: '#5E7EE4' }
            ],
            options: {
                title: {
                    display: true,
                    fontSize: 16,
                    text: 'Device Status'
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                display: true
                            }
                        }],
                    yAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                },
                responsive: true,
                maintainAspectRatio: false
            },
            isDataAvailable: false
        };
        this.location = {
            datasets: [{ data: [], label: 'count' }],
            labels: [],
            colors: [
                { backgroundColor: '#5E7EE4' }
            ],
            options: {
                title: {
                    display: true,
                    fontSize: 16,
                    text: 'Device Location'
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                display: true
                            }
                        }],
                    yAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                },
                responsive: true,
                maintainAspectRatio: false
            },
            isDataAvailable: false
        };
        this.purchaseOrder = {
            datasets: [],
            labels: [],
            colors: [
                { backgroundColor: '#5E7EE4' },
                { backgroundColor: '#AD2E39' },
                { backgroundColor: '#82C456' }
            ],
            options: {
                title: {
                    display: true,
                    fontSize: 16,
                    text: 'Purchase Order History'
                },
                legend: {
                    display: true,
                    position: 'right'
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            isDataAvailable: false
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get billable devices
        this.deviceService.getData(this.deviceService.Api + '/dashboard/billable').subscribe(function (res) {
            res.forEach(function (value) {
                _this.billable.labels.push(value.billable);
                _this.billable.datasets[0].data.push(Number(value.count));
            });
            _this.billable.isDataAvailable = true;
        });
        // get status
        this.deviceService.getData(this.deviceService.Api + '/dashboard/status').subscribe(function (res) {
            res.forEach(function (value) {
                _this.status.labels.push(value.status);
                _this.status.datasets[0].data.push(Number(value.count));
            });
            _this.status.isDataAvailable = true;
        });
        // get location
        this.deviceService.getData(this.deviceService.Api + '/dashboard/location').subscribe(function (res) {
            var deviceCounts = 0; // count total available devices
            res.forEach(function (value) {
                // count
                if (value.location == 'Drawer1-Active' || value.location == 'Drawer3-Suspended' || value.location == 'Drawer4-Inactive(Misc)') {
                    deviceCounts = Number(value.count) + deviceCounts;
                }
                // populate data for bar chart
                _this.location.labels.push(value.location);
                _this.location.datasets[0].data.push(Number(value.count));
            });
            console.log('test');
            console.log(deviceCounts);
            _this.totalAvailableDevices = deviceCounts;
            _this.location.isDataAvailable = true;
        });
        // get purchase order
        this.deviceService.getData(this.deviceService.Api + '/dashboard/purchaseOrder').subscribe(function (res) {
            // populate data for bar chart
            var orderQty = { data: [], label: 'orderQty' };
            var receivedQty = { data: [], label: 'receivedQty' };
            var deficiencyQty = { data: [], label: 'deficiencyQty' };
            // populate data
            res.forEach(function (value) {
                _this.purchaseOrder.labels.push(value.purchase_order);
                orderQty.data.push(Number(value.order_quantity));
                receivedQty.data.push(Number(value.received_quantity));
                deficiencyQty.data.push(Number(value.deficiency_quantity));
            });
            //summary
            _this.purchaseOrder.datasets = [orderQty, receivedQty, deficiencyQty];
            // set true when finished async data
            _this.purchaseOrder.isDataAvailable = true;
        });
        //get total order per received, deficiency
        this.deviceService.getData(this.deviceService.Api + '/dashboard/orderSummary').subscribe(function (res) {
            _this.orders.total_ordered_qty = res[0].total_ordered_qty;
            _this.orders.total_received_qty = res[0].total_received_qty;
            _this.orders.total_deficiency_qty = res[0].total_deficiency_qty;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(480),
        styles: [__webpack_require__(419)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_device_service__["a" /* DeviceService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_device_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit_modal__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__insert_insert_modal__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';



var DeviceHistoryComponent = (function () {
    function DeviceHistoryComponent(deviceService, modalService) {
        this.deviceService = deviceService;
        this.modalService = modalService;
        this.SelectedNumberOfRow = 30;
        this.alert = { successMessage: false, type: null, message: null };
        this.search = { searchBy: '', searchValue: '' };
    }
    DeviceHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceService.getData(this.deviceService.Api + '/deviceHistory/get').subscribe(function (res) {
            _this.deviceHistoryData = res;
        });
    };
    // search by item
    DeviceHistoryComponent.prototype.searchByItem = function (value) {
        var _this = this;
        var obj = {};
        obj[value.searchBy] = value.searchValue;
        console.log(obj);
        this.deviceService.postData(this.deviceService.Api + '/deviceHistory/search', obj).subscribe(function (res) {
            _this.deviceHistoryData = res;
        }, function (err) { return console.log(err); });
    };
    // open modal for editing
    DeviceHistoryComponent.prototype.edit = function (index) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__edit_edit_modal__["a" /* EditDeviceHistoryComponent */], { backdrop: 'static', size: 'lg' });
        modalRef.componentInstance.data = this.deviceHistoryData[index];
        modalRef.result.then(function (res) {
            _this.alert = { successMessage: true, type: 'success', message: 'update success' };
        }, function (error) {
            console.log(error);
        });
    };
    // open modal for delete
    DeviceHistoryComponent.prototype.delete = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.deviceService.postData(_this.deviceService.Api + '/deviceHistory/delete', result).subscribe(function (res) {
                console.log(res);
                _this.alert = { successMessage: true, type: 'success', message: 'delete success' };
            }, function (err) {
                _this.alert = { successMessage: true, type: 'danger', message: 'delete failed ' + err };
            });
        }, function (err) {
            console.log(err);
        });
    };
    // create
    DeviceHistoryComponent.prototype.create = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__insert_insert_modal__["a" /* InsertDeviceHistoryComponent */], { backdrop: 'static', size: 'lg' });
        modalRef.result.then(function (res) {
            _this.alert = { successMessage: true, type: 'success', message: 'update success' };
        }, function (error) {
            console.log(error);
        });
    };
    return DeviceHistoryComponent;
}());
DeviceHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-history',
        template: __webpack_require__(481),
        styles: [__webpack_require__(420)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_device_service__["a" /* DeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object])
], DeviceHistoryComponent);

var _a, _b;
//# sourceMappingURL=device-history.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_device_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceInventoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceInventoryComponent = (function () {
    function DeviceInventoryComponent(deviceService) {
        this.deviceService = deviceService;
        this.settings = { columns: {} };
    }
    DeviceInventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // data variable
        this.deviceService.getData('assets/deviceInventory.json').subscribe(function (res) {
            _this.data = res;
            _this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* LocalDataSource */](_this.data); // create the source
        });
        // setting variable
        var columns = this.deviceService.getDeviceInventoryColumns();
        columns.forEach(function (item) {
            var transformedName = item.replace(/_/g, ' ');
            _this.settings.columns[item] = { title: transformedName, filter: false };
        });
        console.log('bgr');
    };
    return DeviceInventoryComponent;
}());
DeviceInventoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-inventory',
        template: __webpack_require__(484),
        styles: [__webpack_require__(421)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_device_service__["a" /* DeviceService */]) === "function" && _a || Object])
], DeviceInventoryComponent);

var _a;
//# sourceMappingURL=device-inventory.component.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_edit_deviceMgt_modal_edit_device_mgt_modal_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_insert_device_mgt_modal_insert_device_mgt_modal_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_device_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceManagementComponent = (function () {
    function DeviceManagementComponent(modalService, deviceService) {
        this.modalService = modalService;
        this.deviceService = deviceService;
        this.alert = { successMessage: false, type: null, message: null };
        this.sort = false;
        this.search = { device_sn: null, parent_clinic: null, status: null, location: null };
        this.RowsPerPage = 30;
        this.classTrueOrFalse = [];
    }
    DeviceManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Api = this.deviceService.Api;
        this.downloadUrl = this.Api + '/deviceMgt/download';
        // data for smart-table
        this.deviceService.getData(this.Api + '/deviceMgt/get').subscribe(function (response) {
            _this.deviceMgtData = response;
            _this.classTrueOrFalse.push(false);
        });
        // select options
        this.options = this.deviceService.getDeviceMgtSelectOptions();
    };
    // close alert bar
    DeviceManagementComponent.prototype.closeAlert = function () {
        this.alert.successMessage = false;
    };
    // change fa arrow class in accordion
    // changeClass($event) {
    //   this.status = $event.nextState;
    // }
    // change billable style
    DeviceManagementComponent.prototype.billableStyle = function (type) {
        if (type === 'Y') {
            return { 'background-color': '#D98880', 'border-radius': '30px' };
        }
        if (type === 'N') {
            return { 'background-color': '#CACFD2', 'border-radius': '30px' };
        }
    };
    // selected row
    DeviceManagementComponent.prototype.selectedOrUnselectRow = function (index) {
        if (!this.classTrueOrFalse[index]) {
            this.classTrueOrFalse[index] = true;
            this.ifSelected = true;
            this.selectedMgtData = this.deviceMgtData[index];
        }
        else {
            this.classTrueOrFalse[index] = false;
            this.ifSelected = false;
        }
    };
    // edit selected row
    DeviceManagementComponent.prototype.editSelectedData = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__modal_edit_deviceMgt_modal_edit_device_mgt_modal_component__["a" /* EditDeviceManagementModalComponent */], { backdrop: 'static', size: 'lg' });
        modalRef.componentInstance.data = this.selectedMgtData;
        modalRef.result.then(function () {
            _this.alert = { successMessage: true, type: 'success', message: 'update success' };
            console.log('testing');
            console.log(_this.alert);
        }, function (error) {
            console.log(_this.alert);
        });
    };
    // insert selected row
    DeviceManagementComponent.prototype.deleteSelectedData = function (content) {
        var _this = this;
        console.log(this.selectedMgtData);
        this.modalService.open(content).result.then(function (res) {
            console.log(res);
            _this.deviceService.postData(_this.Api + '/deviceMgt/insert', _this.selectedMgtData).subscribe(function (res) {
                console.log(res);
                _this.alert = { successMessage: true, type: 'success', message: 'insert success' };
            }, function (err) {
                console.log(err);
                _this.alert = { successMessage: true, type: 'danger', message: 'insert failed ' + err };
            });
        }, function (err) {
            console.log(err);
        });
    };
    // create new
    DeviceManagementComponent.prototype.create = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__modal_insert_device_mgt_modal_insert_device_mgt_modal_component__["a" /* InsertDeviceMgtModalComponent */], { backdrop: 'static', size: 'lg' });
        modalRef.result.then(function () {
            _this.alert = { successMessage: true, type: 'success', message: 'update success' };
            console.log('testing');
            console.log(_this.alert);
        }, function (error) {
            // this.alert = {successMessage: true, type: 'danger', message: 'update failed '+ error};
            console.log(_this.alert);
        });
    };
    // searching
    DeviceManagementComponent.prototype.filter = function (value, pop) {
        var _this = this;
        console.log(pop);
        if (this.search.device_sn || this.search.parent_clinic || this.search.status || this.search.location) {
            this.deviceService.postData(this.Api + '/deviceMgt/filter', value).subscribe(function (res) {
                _this.deviceMgtData = res;
                console.log('test');
                pop.close();
            });
        }
    };
    DeviceManagementComponent.prototype.clearFilter = function () {
        var _this = this;
        this.search = { device_sn: '', parent_clinic: '', status: '', location: '' };
        this.deviceService.getData(this.Api + '/deviceMgt/get').subscribe(function (res) {
            _this.deviceMgtData = res;
        });
    };
    DeviceManagementComponent.prototype.sortString = function (string) {
        var _this = this;
        this.sort = !this.sort;
        this.deviceMgtData.sort(function (a, b) {
            if (_this.sort) {
                if (a[string].toUpperCase() > b[string].toUpperCase()) {
                    return 1;
                }
                else {
                    if (a[string].toUpperCase() < b[string].toUpperCase()) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            }
            else {
                if (a[string].toUpperCase() < b[string].toUpperCase()) {
                    return 1;
                }
                else {
                    if (a[string].toUpperCase() > b[string].toUpperCase()) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            }
        });
    };
    DeviceManagementComponent.prototype.test = function () {
        console.log('test');
    };
    return DeviceManagementComponent;
}());
DeviceManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-management',
        template: __webpack_require__(485),
        styles: [__webpack_require__(422)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_device_service__["a" /* DeviceService */]) === "function" && _b || Object])
], DeviceManagementComponent);

var _a, _b;
//# sourceMappingURL=device-mgt.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(488),
        styles: [__webpack_require__(425)]
    }),
    __metadata("design:paramtypes", [])
], HomepageComponent);

//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Location} from '@angular/common';   // import location
var LoginComponent = (function () {
    function LoginComponent() {
        // alert msg
        this.successMessage = true;
        this.alert = { message: 'incorrect username or password' };
        // log in user
        this.user = { email: null, password: null };
    }
    LoginComponent.prototype.closeAlert = function () {
        this.successMessage = false;
    };
    // login form submit
    LoginComponent.prototype.submit = function (user) {
        if (!user.email || !user.password) {
            // this.successMessage = true;
            this.alert.message = 'email and password is required';
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(489),
        styles: [__webpack_require__(426)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicComponent = (function () {
    function PublicComponent() {
    }
    PublicComponent.prototype.ngOnInit = function () {
    };
    return PublicComponent;
}());
PublicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-public',
        template: __webpack_require__(490),
        styles: [__webpack_require__(427)]
    }),
    __metadata("design:paramtypes", [])
], PublicComponent);

//# sourceMappingURL=public.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
        this.submitted = false;
        // alert msg
        this.successMessage = true;
        this.alert = { message: null };
        this.user = { firstName: null, lastName: null, email: null, pwd: null, pwd2: null };
    }
    SignupComponent.prototype.closeAlert = function () {
        this.successMessage = false;
    };
    // submit sign up form
    SignupComponent.prototype.submit = function (user) {
        if (user.pwd !== user.pwd2) {
            this.alert.message = 'passwords are not the same';
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(491),
        styles: [__webpack_require__(428)]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedVariables; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedVariables = (function () {
    function SharedVariables() {
    }
    return SharedVariables;
}());
SharedVariables = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SharedVariables);

//# sourceMappingURL=shared.variables.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-test',
        template: __webpack_require__(492),
        styles: [__webpack_require__(429)]
    }),
    __metadata("design:paramtypes", [])
], TestComponent);

//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "table tr th {\r\n  background-color: #3ec9cb;\r\n  font-weight: 700;\r\n  color:white;\r\n  text-align: center;\r\n}\r\ntable {\r\n  /*color: #3ec9dc;*/\r\n  font-weight: 400;\r\n}\r\n\r\n.table-hover tbody tr:hover {\r\n  background-color: #E1FFC2;\r\n  color: #EB4E1E;\r\n  font-weight: 500;\r\n  font-size: large;\r\n  text-indent: 2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".dashboardTables th {\r\n  background-color: #82C456;\r\n  color: white;\r\n}\r\n\r\ntable tr td:hover {\r\n  font-weight: 500;\r\n  color: #EB4E1E;\r\n  text-indent: 2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".action {\r\n cursor: pointer;\r\n}\r\n.dropdown-toggle::after {\r\n  display:none\r\n}\r\n.action .dropdown-item:hover {\r\n  color: #EB4E1E;\r\n}\r\n.action .dropdown-menu {\r\n  background-color: #F8F9F9;\r\n}\r\n.search select, .search input {\r\n  border: 1px solid lightgray;\r\n  border-radius: 5px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".customBtns .btn-sm {\r\n  border-radius: 30px;\r\n  background: linear-gradient(to right, #CACFD2 , #A6ACAF);\r\n  box-shadow: 2px 1px 5px 1px #969696;\r\n}\r\n\r\n.active {\r\n  background-color: #E1FFC2;\r\n}\r\n.table tr:hover {\r\n  background-color: #F8F9F9;\r\n  cursor: pointer;\r\n}\r\n\r\n.filtering input, .filtering select {\r\n  width: 200px;\r\n  height:30px;\r\n  border: 1px solid lightgray;\r\n}\r\n.fa-pencil, .fa-eraser, .fa-download {\r\n  color: cornflowerblue;\r\n}\r\n\r\n.dynamicChangeCursor:hover {\r\n  cursor: pointer;\r\n  background-color: #E5E7E9;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\r\n/*input, select {*/\r\n  /*border: 1px solid lightgray;*/\r\n  /*border-radius: 10px;*/\r\n  /*width: 200px;*/\r\n  /*height:25px;*/\r\n/*}*/\r\n.greyarea {\r\n  background-color: #E5E7E9;\r\n  width: 500px;\r\n  text-align: center;\r\n}\r\n\r\ninput, select {\r\n  border-radius: 5px;\r\n  width: 200px;\r\n  height:25px;\r\n  /*border: 1px solid #dcdcdc;*/\r\n  /*transition: box-shadow 0.3s, border 0.3s;*/\r\n}\r\n/*input:focus, select:focus {*/\r\n  /*border: 1px solid #707070;*/\r\n  /*box-shadow: 0 0 5px 1px #969696;*/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "/*div label, div input {*/\r\n/*display: inline-block;*/\r\n/*}*/\r\n.insert input, .insert select {\r\n  /*border: 1px solid lightgray;*/\r\n  border-radius: 5px;\r\n  width: 200px;\r\n  height:25px;\r\n  box-shadow: 2px 1px 5px 1px #969696;\r\n}\r\n.insert .greyarea {\r\n  background-color: #E5E7E9;\r\n  width: 500px;\r\n  text-align: center;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".login-container {\r\n  width: 438px;\r\n  margin-left: 30%;\r\n  margin-top:100px;\r\n  border: 1px solid lightgray;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n}\r\n\r\n.login-box {\r\n  padding: 29px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".bg-faded {\r\n  background-color: #232323;\r\n  color: white;\r\n  padding: 1px;\r\n}\r\n.navbar-light .navbar-nav .nav-link {\r\n  color: white;\r\n  font-family: \"Rajdhani\", \"DIN\", sans-serif;\r\n  font-weight: bold;\r\n}\r\n.nav-link {\r\n  display: contents;\r\n}\r\nli {\r\n  margin-left: 25px;\r\n}\r\nli:hover {\r\n  background-color: #6C7176;\r\n}\r\nli .active {\r\n  background-color: #6C7176;\r\n}\r\n.dropdown-menu {\r\n  background-color: #F8F9F9;\r\n}\r\n.dropdown-item:hover {\r\n  color: #EB4E1E;\r\n}\r\n.fa {\r\n  color: #EB4E1E;\r\n}\r\n\r\n.panel-footer {\r\n  position: relative;\r\n  /*margin-bottom: -150px; !* negative value of footer height *!*/\r\n  height: 70px;\r\n  /*clear:both;*/\r\n  /*padding-top:20px;*/\r\n\r\n  background-color: lightgray;\r\n  color:white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\r\n.register-box {\r\n  width: 500px;\r\n  margin-top: 60px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = "<ui-view>\n  <!--<a uiSref=\"login\">login</a>-->\n</ui-view>\n"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<p>\n  accessory-inventory works!\n</p>\n"

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <table class=\"table table-condensed table-sm table-hover table-responsive\">\n    <thead>\n    <tr>\n      <th>NO.</th>\n      <th>Clinic</th>\n      <!--<th>Sub Clinic</th>-->\n      <th>Count of Devices</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of customerData; let i=index\">\n      <td>{{i+1}}</td>\n      <td (contextmenu)=\"rightClick($event)\">\n        {{item.parent_clinic}}\n        <!--<ngb-accordion #acc=\"ngbAccordion\" [type]=\"success\">-->\n          <!--<ngb-panel>-->\n            <!--<ng-template ngbPanelTitle>-->\n              <!--<div><i class=\"fa fa-angle-down\"></i>{{item.parent_clinic}}</div>-->\n            <!--</ng-template>-->\n            <!--<ng-template ngbPanelContent>-->\n              <!--test-->\n              <!--&lt;!&ndash;<p *ngFor=\"let device of item.device_sn\">{{item.device_sn}}</p>&ndash;&gt;-->\n            <!--</ng-template>-->\n          <!--</ngb-panel>-->\n        <!--</ngb-accordion>-->\n      </td>\n      <!--<div style=\"background-color: grey; width:200px; height: 200px\" >-->\n        <!--right click {{test}} times-->\n      <!--</div>-->\n      <!--<td class=\"customcss\">{{item.sub_clinic}}</td>-->\n      <td class=\"text-center\"><span class=\"badge badge-pill badge-default\">{{item.totaldevices}}</span></td>\n\n    </tr>\n    <tr>\n      <td></td>\n      <td><strong>Grand Total</strong></td>\n      <!--<td></td>-->\n      <td class=\"text-center\"><strong>{{totalDevices}}</strong></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <!--summary table-->\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <table class=\"table table-condensed table-bordered table-hover table-striped dashboardTables\">\n        <thead>\n        <tr>\n          <th>Available Inventory List (Ttls)</th>\n          <th>Qty</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr class=\"text-danger\">\n          <td>Total Available Devices</td>\n          <td><strong>{{totalAvailableDevices}}</strong></td>\n        </tr>\n        <tr>\n          <td>3M 2560 red dot electrodes(50/packet)</td>\n          <td>2</td>\n        </tr>\n        <tr>\n          <td>3M 2570-5 red dot electrodes</td>\n          <td>1000</td>\n        </tr>\n        <tr>\n          <td>Sensitive Electrodes(60/packet)</td>\n          <td>9</td>\n        </tr>\n        <tr>\n          <td>Dual-Electrodes(300/packet)</td>\n          <td>6</td>\n        </tr>\n        <tr>\n          <td>Device User Manuals</td>\n          <td>30</td>\n        </tr>\n        <tr>\n          <td>Cel-Fi Smart Signal Booster</td>\n          <td>2</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col-sm-offset-2 col-sm-4\">\n      <table class=\"table table-bordered table-hover table-striped dashboardTables\">\n        <tr>\n          <th>Devices Ordered from TZ Medical</th>\n          <th>Qty</th>\n        </tr>\n        <tr>\n          <td>Total Ordered Qty</td>\n          <td>{{orders.total_ordered_qty}}</td>\n        </tr>\n        <tr>\n          <td>Total Received Qty</td>\n          <td>{{orders.total_received_qty}}</td>\n        </tr>\n        <tr>\n          <td>Total Deficiency Qty</td>\n          <td>{{orders.total_deficiency_qty}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <br>\n  <div style=\"display: block\" class=\"text-center\" *ngIf=\"billable.isDataAvailable \">\n    <canvas baseChart width=\"300\" height=\"300\" [datasets]=\"billable.datasets\"  [options]=\"billable.options\"\n            [labels]=\"billable.labels\" [colors]=\"billable.colors\"  chartType=\"pie\">\n    </canvas>\n  </div>\n  <div class=\"row\">\n    <div  style=\"display: block\" class=\"col-sm-6\"  *ngIf=\"status.isDataAvailable\">\n      <canvas baseChart width=\"400\" height=\"250\" [datasets]=\"status.datasets\"  [labels]=\"status.labels\" [options]=\"status.options\"\n            [colors]=\"status.colors\"   [legend]=\"false\"  chartType=\"horizontalBar\">\n      </canvas>\n    </div>\n    <br>\n    <div  style=\"display: block\" class=\"col-sm-6\"  *ngIf=\"location.isDataAvailable\">\n      <canvas baseChart width=\"400\" height=\"250\" [datasets]=\"location.datasets\"  [labels]=\"location.labels\" [options]=\"location.options\"\n              [colors]=\"location.colors\"   [legend]=\"false\"  chartType=\"horizontalBar\">\n      </canvas>\n    </div>\n  </div>\n  <br>\n   <div  style=\"display: block\" class=\"text-center\"  *ngIf=\"purchaseOrder.isDataAvailable\">\n     <canvas baseChart width=\"800\" height=\"260\" [datasets]=\"purchaseOrder.datasets\"  [labels]=\"purchaseOrder.labels\" [options]=\"purchaseOrder.options\"\n             [colors]=\"purchaseOrder.colors\"   [legend]=\"false\"  chartType=\"bar\">\n     </canvas>\n   </div>\n\n</div>\n"

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <ngb-tabset>\n      <div>\n        <ngb-tab title=\"History\">\n          <ng-template ngbTabContent>\n            <div style=\"width: 900px\">\n              <ngb-alert *ngIf=\"alert.successMessage\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert()\">{{alert.message}}</ngb-alert>\n            </div>\n            <br>\n            <div class=\"row search\">\n                <select [(ngModel)]=\"search.searchBy\" class=\"offset-sm-1 col-sm-2\">\n                  <option value=\"\" selected disabled>Select an search</option>\n                  <option value=\"history_date\">History Date</option>\n                  <option value=\"device_sn\">Device SN</option>\n                  <option value=\"device_action\">Device Action</option>\n                  <option value=\"by_whom\">By Whom</option>\n                  <option value=\"status\">Status</option>\n                  <option value=\"device_owner\">Device Owner</option>\n                  <option value=\"replace_device\">Replaced Device</option>\n                  <option value=\"replaced_device_sn\">Replaced Device SN</option>\n                </select>\n                <input type=\"text\" [(ngModel)]=\"search.searchValue\" placeholder=\" Search Value\">\n              <button class=\"btn btn-sm btn-primary\" (click)=\"searchByItem(search)\"><i class=\"fa fa-search\"></i></button>\n              <button class=\"btn btn-secondary offset-sm-5 col-sm-1\" (click)=\"create()\">Create New</button>\n            </div>\n            <br>\n\n            <table class=\"table table-bordered table-hover table-sm table-responsive\">\n              <thead>\n                <tr>\n                  <th>Action</th>\n                  <th>NO.</th>\n                  <th>History Date</th>\n                  <th>Device_sn</th>\n                  <th>Device Action</th>\n                  <th>By Whom</th>\n                  <th>Status</th>\n                  <th>Device Owner</th>\n                  <th>Replace Device</th>\n                  <th>Replaced Device SN</th>\n                  <th>Note</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of deviceHistoryData | paginate: { itemsPerPage: SelectedNumberOfRow , currentPage: p }; let i = index\">\n                  <td class=\"text-center action\">\n                      <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\n                          <i class=\"fa fa-angle-down\" style=\"color: darkblue\" ngbDropdownToggle></i>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownManual\">\n                          <button class=\"dropdown-item\" (click)=\"edit(i)\">Edit</button>\n                          <!--modal to confirm delete-->\n                          <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                            <div class=\"modal-header\">\n                              <h4 class=\"modal-title\">Confirm</h4>\n                            </div>\n                            <div class=\"modal-body\">\n                              <div class=\"container\">\n                                <p>Are you sure to delete device SN <strong>{{item.device_sn}}</strong> history?</p>\n                                <br><br>\n                                <button type=\"button\" class=\"btn btn-secondary col-sm-3\" (click)=\"d()\">Cancel</button>\n                                <button type=\"button\" class=\"btn btn-danger col-sm-3 pull-right\" (click)=\"c(item)\">Confirm</button>\n                                <br><br>\n                              </div>\n                            </div>\n                          </ng-template>\n                          <button class=\"dropdown-item\" (click)=\"delete(content)\">delete</button>\n                          <!--end of modal for delete-->\n                        </div>\n                      </div>\n                    </td>\n                  <td><div style=\"width: 10px\">{{i+1}}</div></td>\n                  <td><div style=\"width: 100px\">{{item.history_date | date: 'yyyy-MM-dd'}}</div></td>\n                  <td><div style=\"width: 100px\">{{item.device_sn}}</div></td>\n                  <td><div style=\"width: 100px\">{{item.device_action}}</div></td>\n                  <td><div style=\"width: 100px\">{{item.by_whom}}</div></td>\n                  <td><div style=\"width: 100px\">{{item.status}}</div></td>\n                  <td><div style=\"width: 100px\">{{item.device_owner}}</div></td>\n                  <td><div style=\"width: 100px\">{{item.replace_device}}</div></td>\n                  <td><div style=\"width: 100px\">{{item.replaced_device_sn}}</div></td>\n                  <td><div style=\"width: 200px\">{{item.note}}</div></td>\n                </tr>\n              </tbody>\n            </table>\n            <div class=\"row\">\n              <div class=\"col-sm-7\">\n                <!--ngx-pagination-->\n                <pagination-controls (pageChange)=\"p = $event\" autoHide=\"true\"></pagination-controls>\n              </div>\n              <div class=\"offset-sm-3 col-sm-2\">\n                <select [(ngModel)]=\"SelectedNumberOfRow\">\n                  <option value=\"30\" selected>30</option>\n                  <option value=\"50\">50</option>\n                  <option value=\"100\">100</option>\n                  <option value=\"200\">200</option>\n                </select>\n              </div>\n            </div>\n\n          </ng-template>\n        </ngb-tab>\n      </div>\n\n      <ngb-tab title=\"Action\">\n        <ng-template ngbTabContent>\n\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n\n</div>\n"

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Device History Update</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"container\">\r\n    <div class=\"text-danger\" *ngIf=\"error\">{{error}}</div>\r\n    <br>\r\n    <form #ngForm=\"ngForm\" name=\"ngForm\">\r\n      <br>\r\n      <div class=\"form-group row\">\r\n        <label for=\"history_date\" class=\"col-4 text-right col-form-label\">History Date</label>\r\n        <div class=\"col-5\">\r\n          <input class=\"form-control\" type=\"text\"  id=\"history_date\"  name=\"history_date\" [ngStyle]=\"styles.history_date_style\"\r\n                 [value]=\"data.history_date | date: 'yyyy-MM-dd'\" (change)=\"data.history_date=$event.target.value\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"device_sn\" class=\"col-4 text-right col-form-label\">Device SN *</label>\r\n        <div class=\"col-5\">\r\n          <input class=\"form-control\" type=\"text\"  id=\"device_sn\"  name=\"device_sn\" [(ngModel)]=\"data.device_sn\" required #device_sn=\"ngModel\">\r\n          <div class=\"pull-right form_msg\" *ngIf=\"device_sn.errors?.required\">Device SN is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"device_action\" class=\"col-4 text-right col-form-label\">Device Action</label>\r\n        <div class=\"col-5\">\r\n          <select [(ngModel)]=\"data.device_action\" class=\"form-control\" id=\"device_action\" name=\"device_action\">\r\n            <option value=\"\"></option>\r\n            <option *ngFor=\"let o of options.device_action\" [value]=\"o\">{{o}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"by_whom\" class=\"col-4 text-right col-form-label\">By Whom</label>\r\n        <div class=\"col-5\">\r\n          <select [(ngModel)]=\"data.by_whom\" class=\"form-control\" id=\"by_whom\" name=\"by_whom\">\r\n            <option value=\"\"></option>\r\n            <option *ngFor=\"let o of options.by_whom\" [value]=\"o\">{{o}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"status\" class=\"col-4 text-right col-form-label\">Status</label>\r\n        <div class=\"col-5\">\r\n          <select [(ngModel)]=\"data.status\" class=\"form-control\" id=\"status\" name=\"status\">\r\n            <option value=\"\"></option>\r\n            <option *ngFor=\"let o of options.status\" [value]=\"o\">{{o}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"device_owner\" class=\"col-4 text-right col-form-label\">Device Owner</label>\r\n        <div class=\"col-5\">\r\n          <input class=\"form-control\" type=\"text\"  id=\"device_owner\" name=\"device_owner\"\r\n                 [(ngModel)]=\"data.device_owner\" [ngbTypeahead]=\"search\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"replace_device\" class=\"col-4 text-right col-form-label\">Replace Device</label>\r\n        <div class=\"col-5\">\r\n          <select [(ngModel)]=\"data.replace_device\" class=\"form-control\" id=\"replace_device\" name=\"replace_device\">\r\n            <option value=\"\"></option>\r\n            <option *ngFor=\"let o of options.YesOrNo\" [value]=\"o\">{{o}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" *ngIf=\"data.replace_device == 'Y'\">\r\n        <label for=\"replaced_device_sn\" class=\"col-4 text-right col-form-label\">Replaced Device SN</label>\r\n        <div class=\"col-5\">\r\n          <input class=\"form-control\" type=\"text\"  id=\"replaced_device_sn\" name=\"replaced_device_sn\"  [ngStyle]=\"styles.replaced_device_SN_style\"\r\n                 [(ngModel)]=\"data.replaced_device_sn\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"note\" class=\"col-4 text-right col-form-label\">Note</label>\r\n        <div class=\"col-5\">\r\n          <textarea class=\"form-control\" type=\"text\"  id=\"note\"  name=\"note\" [(ngModel)]=\"data.note\" style=\"height: 200px\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <br>\r\n    <button type=\"button\" class=\"btn btn-secondary col-sm-2\" (click)=\"activeModal.dismiss()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-danger offset-sm-7 col-sm-2\" (click)=\"update(data)\" >Update</button>\r\n    <br><br>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Create New</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"container\">\r\n    <div class=\"text-danger\" *ngIf=\"error\">{{error}}</div>\r\n    <br>\r\n    <form #ngForm=\"ngForm\" name=\"ngForm\">\r\n      <br>\r\n      <div class=\"form-group row\">\r\n        <label for=\"history_date\" class=\"col-4 text-right col-form-label\">History Date</label>\r\n        <div class=\"col-5\">\r\n          <input class=\"form-control\" type=\"text\"  id=\"history_date\"  name=\"history_date\" [ngStyle]=\"styles.history_date_style\"\r\n                 [value]=\"data.history_date | date: 'yyyy-MM-dd'\" (change)=\"data.history_date=$event.target.value\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"device_sn\" class=\"col-4 text-right col-form-label\">Device SN *</label>\r\n        <div class=\"col-5\">\r\n          <input class=\"form-control\" type=\"text\"  id=\"device_sn\"  name=\"device_sn\" [(ngModel)]=\"data.device_sn\" required #device_sn=\"ngModel\">\r\n          <div class=\"pull-right form_msg\" *ngIf=\"device_sn.errors?.required && device_sn.touched\">Device SN is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"device_action\" class=\"col-4 text-right col-form-label\">Device Action</label>\r\n        <div class=\"col-5\">\r\n          <select [(ngModel)]=\"data.device_action\" class=\"form-control\" id=\"device_action\" name=\"device_action\">\r\n            <option value=\"\"></option>\r\n            <option *ngFor=\"let o of options.device_action\" [value]=\"o\">{{o}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"by_whom\" class=\"col-4 text-right col-form-label\">By Whom</label>\r\n        <div class=\"col-5\">\r\n          <select [(ngModel)]=\"data.by_whom\" class=\"form-control\" id=\"by_whom\" name=\"by_whom\">\r\n            <option value=\"\"></option>\r\n            <option *ngFor=\"let o of options.by_whom\" [value]=\"o\">{{o}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"status\" class=\"col-4 text-right col-form-label\">Status</label>\r\n        <div class=\"col-5\">\r\n          <select [(ngModel)]=\"data.status\" class=\"form-control\" id=\"status\" name=\"status\">\r\n            <option value=\"\"></option>\r\n            <option *ngFor=\"let o of options.status\" [value]=\"o\">{{o}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"device_owner\" class=\"col-4 text-right col-form-label\">Device Owner</label>\r\n        <div class=\"col-5\">\r\n          <input class=\"form-control\" type=\"text\"  id=\"device_owner\" name=\"device_owner\"\r\n                 [(ngModel)]=\"data.device_owner\" [ngbTypeahead]=\"search\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"replace_device\" class=\"col-4 text-right col-form-label\">Replace Device</label>\r\n        <div class=\"col-5\">\r\n          <select [(ngModel)]=\"data.replace_device\" class=\"form-control\" id=\"replace_device\" name=\"replace_device\">\r\n            <option value=\"\"></option>\r\n            <option *ngFor=\"let o of options.YesOrNo\" [value]=\"o\">{{o}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" *ngIf=\"data.replace_device == 'Y'\">\r\n        <label for=\"replaced_device_sn\" class=\"col-4 text-right col-form-label\">Replaced Device SN</label>\r\n        <div class=\"col-5\">\r\n          <input class=\"form-control\" type=\"text\"  id=\"replaced_device_sn\" name=\"replaced_device_sn\"  [ngStyle]=\"styles.replaced_device_SN_style\"\r\n                 [(ngModel)]=\"data.replaced_device_sn\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"note\" class=\"col-4 text-right col-form-label\">Note</label>\r\n        <div class=\"col-5\">\r\n          <textarea class=\"form-control\" type=\"text\"  id=\"note\"  name=\"note\" [(ngModel)]=\"data.note\" style=\"height: 200px\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <br>\r\n    <button type=\"button\" class=\"btn btn-secondary col-sm-2\" (click)=\"activeModal.dismiss()\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-danger offset-sm-7 col-sm-2\" (click)=\"add(data)\" >Add</button>\r\n    <br><br>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid table-responsive\">\n  <!--<input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">-->\n    <h4>Device Inventory Table</h4>\n    <ng2-smart-table class=\"table table-bordered table-hover table-sm\" [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n</div>\n"

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <br>\r\n  <div style=\"width: 900px\">\r\n    <ngb-alert *ngIf=\"alert.successMessage\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert()\">{{alert.message}}</ngb-alert>\r\n  </div>\r\n  <h6>Device Summary</h6>\r\n\r\n  <div class=\"row customBtns\">\r\n    <button type=\"button\" class=\"btn btn-default btn-sm col-sm-1\" (click)=\"editSelectedData()\" [disabled]=\"!ifSelected\" [ngClass]=\"{dynamicChangeCursor: ifSelected}\">\r\n      <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit Selected\r\n    </button>\r\n    <!--delete-->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Confirm Device SN {{selectedMgtData.device_sn}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"container\">\r\n          <p>Are you sure to delete device SN {{selectedMgtData.device_sn}}?</p>\r\n          <br><br>\r\n          <button type=\"button\" class=\"btn btn-secondary col-sm-3\" (click)=\"d()\">Cancel</button>\r\n          <button type=\"button\" class=\"btn btn-danger col-sm-3 pull-right\" (click)=\"c()\">Confirm</button>\r\n          <br><br>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <button type=\"button\" class=\"btn btn-default btn-sm offset-sm-1\" (click)=\"deleteSelectedData(content)\"\r\n            [disabled]=\"!ifSelected\" [ngClass]=\"{dynamicChangeCursor: ifSelected}\">\r\n      <i class=\"fa fa-eraser\" aria-hidden=\"true\"></i> Delete Selected\r\n    </button>\r\n\r\n    <!--delete-->\r\n    <button type=\"button\" class=\"btn btn-default btn-sm offset-sm-4 col-sm-1\" (click)=\"create()\">Create New</button>\r\n    <button type=\"button\" class=\"btn btn-default btn-sm col-sm-1\">\r\n      <a [href]=\"downloadUrl\" download=\"deviceMgt.csv\" style=\"color: black\"> <span class=\"fa fa-download\"></span> Export</a>\r\n    </button>\r\n\r\n\r\n    <!--filtering in popover-->\r\n    <ng-template #popContent >\r\n      <table class=\"filtering\">\r\n        <tr>\r\n          <td>Device SN</td>\r\n          <td><input  type=\"text\"  [(ngModel)]=\"search.device_sn\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Parent Clinic</td>\r\n          <td><input type=\"text\"  [(ngModel)]=\"search.parent_clinic\"></td>\r\n        </tr>\r\n        <tr>\r\n          <td>Status</td>\r\n          <td>\r\n            <select  [(ngModel)]=\"search.status\">\r\n              <option *ngFor=\"let s of options.status\" [value]=\"s\">{{s}}</option>\r\n            </select>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Location</td>\r\n          <select  [(ngModel)]=\"search.location\">\r\n            <option *ngFor=\"let s of options.location\" [value]=\"s\">{{s}}</option>\r\n          </select>\r\n        </tr>\r\n      </table>\r\n      <br>\r\n      <button type=\"button\" class=\"btn btn-default btn-sm \" (click)=\"clearFilter(); popover.close()\">Clear</button>\r\n      <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" (click)=\"filter(search, popover)\">Search</button>\r\n    </ng-template>\r\n\r\n    <button type=\"button\" class=\"btn btn-default btn-sm col-sm-1\" [ngbPopover]=\"popContent\" #popover=\"ngbPopover\" popoverTitle=\"Filters\" placement=\"left\">\r\n      Filter <span class=\"fa fa-sort-desc\"></span></button>\r\n  </div>\r\n\r\n\r\n  <!--table-->\r\n  <table class=\"table table-hover table-sm table-responsive\">\r\n    <thead>\r\n    <tr>\r\n      <th><input type=\"checkbox\" disabled></th>\r\n      <th (click)=\"sortString('device_sn')\">Device SN<span class=\"fa fa-sort-desc\"></span>\r\n      </th>\r\n      <th (click)=\"sortString('status')\">Status<span class=\"fa fa-sort-desc\"></span></th>\r\n      <th>Checked Out By</th>\r\n      <th>Checked Out Date</th>\r\n      <th (click)=\"sortString('location')\">Location<span class=\"fa fa-sort-desc\"></span></th>\r\n      <th (click)=\"sortString('parent_clinic')\">Parent Clinic<span class=\"fa fa-sort-desc\"></span></th>\r\n      <th (click)=\"sortString('sub_clinic')\">Sub Clinic<span class=\"fa fa-sort-desc\"></span></th>\r\n      <th (click)=\"sortString('physician')\">Physician<span class=\"fa fa-sort-desc\"></span></th>\r\n      <th (click)=\"sortString('billable')\">Billable<span class=\"fa fa-sort-desc\"></span></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr [hidden]=\"!deviceMgtData?.length\" (click)=\"selectedOrUnselectRow(i)\" [ngClass]=\"{active: classTrueOrFalse[i]}\"\r\n        *ngFor=\"let item of deviceMgtData | paginate: { itemsPerPage: RowsPerPage, currentPage: p }; let i=index\">\r\n      <!--<td><input type=\"checkbox\" [value]=\"i\" (change)=\"checkbox($event)\"></td>-->\r\n      <td><input type=\"checkbox\" [ngModel]=\"classTrueOrFalse[i]\"></td>\r\n      <td>{{item.device_sn}}</td>\r\n      <td>{{item.status}}</td>\r\n      <td>{{item.checked_out_by}}</td>\r\n      <td>{{item.checked_out_date | date: 'yyyy-MM-dd'}}</td>\r\n      <td>{{item.location}}</td>\r\n      <td>{{item.parent_clinic}}</td>\r\n      <td>{{item.sub_clinic}}</td>\r\n      <td>{{item.physician}}</td>\r\n      <td><div [ngStyle]=\"billableStyle(item.billable)\" class=\"text-center\">{{item.billable}}</div></td>\r\n    </tr>\r\n    <div [hidden]=\"deviceMgtData?.length\" class=\"text-center text-danger\">No result found!</div>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\">\r\n      <!--ngx-pagination-->\r\n      <pagination-controls (pageChange)=\"p = $event\" autoHide=\"true\"></pagination-controls>\r\n    </div>\r\n    <div class=\"offset-sm-5 col-sm-2\">\r\n      <select [(ngModel)]=\"RowsPerPage\">\r\n        <option value=\"30\" selected>30</option>\r\n        <option value=\"50\">50</option>\r\n        <option value=\"100\">100</option>\r\n        <option value=\"200\">200</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Device SN {{data.device_sn}}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container\">\n    <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n    <div class=\"greyarea\">\n      <h5 class=\"text-success\">Device Feature</h5>\n      <div><label >status</label>\n        <select class=\"pull-right\" [(ngModel)]=\"data.status\">\n          <option value=\"\"></option>\n          <option *ngFor=\"let s of options.status\" [value]=\"s\">{{s}}</option>\n        </select>\n      </div>\n      <div><label >location</label>\n        <select class=\"pull-right\" [(ngModel)]=\"data.location\">\n          <option value=\"\"></option>\n          <option *ngFor=\"let l of options.location\" [value]=\"l\">{{l}}</option>\n        </select>\n      </div>\n      <div><label >parent clinic</label>\n        <input class=\"pull-right\" [(ngModel)]=\"data.parent_clinic\" [ngbTypeahead]=\"searchParentClinic\">\n      </div>\n      <div><label >sub clinic</label>\n        <input class=\"pull-right\" [(ngModel)]=\"data.sub_clinic\" [ngbTypeahead]=\"searchSubClinic\">\n      </div>\n      <div><label >Checked out by</label>\n        <select class=\"pull-right\" [(ngModel)]=\"data.checked_out_by\">\n          <option value=''></option>\n          <option *ngFor=\"let m of options.checked_by\" [value]=\"m\">{{m}}</option>\n        </select>\n      </div>\n      <div>\n        <label >checked out date</label>\n        <!--<input [(ngModel)]=\"data.checked_out_date\">-->\n        <input class=\"pull-right\" type=\"text\" [value]=\"data.checked_out_date |  date:'yyyy-MM-dd'\" [ngStyle]=\"styles.checked_out_date\"\n               (change)=\"data.checked_out_date = $event.target.value\">\n        <!--<span *ngIf=test.errors?.pattern\">Date Format: yyyy-MM-dd</span>-->\n      </div>\n      <p>Or</p>\n      <div><label>checked in by</label>\n        <select class=\"pull-right\" [(ngModel)]=\"data.checked_in_by\">\n          <option value=\"\"></option>\n          <option *ngFor=\"let m of options.checked_by\" [value]=\"m\">{{m}}</option>\n        </select>\n      </div>\n      <div><label>checked in date</label>\n        <input class=\"pull-right\" type=\"text\" [value]=\"data.checked_in_date | date:'yyyy-MM-dd'\" [ngStyle]=\"styles.checked_in_date\"\n               (change)=\"data.checked_in_date=$event.target.value\">\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col\">\n          <h5 class=\"text-primary\">Device Attributes</h5>\n          <div><label >iccid</label><input class=\"pull-right\" type=\"text\" [(ngModel)]=\"data.iccid\"></div>\n          <div><label>imei</label><input class=\"pull-right\" type=\"text\" [(ngModel)]=\"data.imei\"></div>\n          <div><label >model number</label><input class=\"pull-right\"  type=\"text\" [(ngModel)]=\"data.model_number\"></div>\n          <div><label >points to</label>\n            <select class=\"pull-right\" [(ngModel)]=\"data.points_to\">\n              <option value=\"\"></option>\n              <option *ngFor=\"let m of options.points_to\" [value]=\"m\">{{m}}</option>\n            </select>\n          </div>\n\n        <div>\n            <label >model description</label>\n            <select class=\"pull-right\" [(ngModel)]=\"data.model_description\">\n              <option value=\"\"></option>\n              <option *ngFor=\"let m of options.model_description\" [value]=\"m\">{{m}}</option>\n            </select>\n          </div>\n\n          <div>\n            <label >manufacturer</label>\n            <select class=\"pull-right\" [(ngModel)]=\"data.manufacturer\">\n              <option value=\"\"></option>\n              <option *ngFor=\"let m of options.manufacturer\" [value]=\"m\">{{m}}</option>\n            </select>\n          </div>\n        <div>\n          <label >firmware version</label>\n          <select class=\"pull-right\" [(ngModel)]=\"data.firmware_version\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.firmware_version\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n        <div><label >zywie logo</label>\n          <select class=\"pull-right\" [(ngModel)]=\"data.zywie_logo\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.yesOrNo\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n          <br>\n          <h5 class=\"text-primary\">SIM Attributes</h5>\n          <div>\n            <label>sim provider</label>\n            <select class=\"pull-right\" [(ngModel)]=\"data.sim_provider\">\n              <option value=\"\"></option>\n              <option *ngFor=\"let m of options.sim_provider\" [value]=\"m\">{{m}}</option>\n            </select>\n          </div>\n          <div><label>wyless provision_date</label>\n            <input class=\"pull-right\" type=\"text\" [value]=\"data.wyless_provision_date | date:'yyyy-MM-dd'\"  [ngStyle]=\"styles.wyless_provision_date\"\n                   (change)=\"data.wyless_provision_date=$event.target.value\"></div>\n          <div><label>use zywie sim</label>\n            <select class=\"pull-right\" [(ngModel)]=\"data.use_zywie_sim\">\n              <option value=\"\"></option>\n              <option *ngFor=\"let m of options.yesOrNo\" [value]=\"m\">{{m}}</option>\n            </select>\n          </div>\n      </div>\n      <div class=\"col\">\n        <h5 class=\"text-primary\">Order Atrributes</h5>\n        <div><label>purchase order</label><input class=\"pull-right\" type=\"text\" [(ngModel)]=\"data.purchase_order\"></div>\n        <div><label>registration date</label>\n          <input class=\"pull-right\" type=\"text\" [value]=\"data.registration_date | date:'yyyy-MM-dd'\" [ngStyle]=\"styles.registration_date\"\n                 (change)=\"data.registration_date=$event.target.value\"></div>\n        <br>\n        <h5 class=\"text-info\">Test Attributes</h5>\n        <div><label>device test date</label>\n          <input class=\"pull-right\" type=\"text\" [value]=\"data.device_test_date | date:'yyyy-MM-dd'\" [ngStyle]=\"styles.device_test_date\"\n                 (change)=\"data.device_test_date=$event.target.value\"></div>\n        <div><label>device suspend date</label>\n          <input class=\"pull-right\" type=\"text\" [value]=\"data.device_suspension_date | date:'yyyy-MM-dd'\"  [ngStyle]=\"styles.device_suspension_date\"\n                 (change)=\"data.device_suspension_date=$event.target.value\"></div>\n        <br>\n        <h5 class=\"text-info\">Lease</h5>\n        <div><label>lease</label>\n          <select class=\"pull-right\" [(ngModel)]=\"data.data\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.yesOrNo\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n        <div><label>lease price per month</label><input class=\"pull-right\" type=\"text\" [(ngModel)]=\"data.lease_price_per_month\"></div>\n        <div><label>lease start date</label>\n          <input class=\"pull-right\" type=\"text\" [value]=\"data.lease_start_date | date:'yyyy-MM-dd'\" [ngStyle]=\"styles.lease_start_date\"\n                 (change)=\"data.lease_start_date=$event.target.value\"></div>\n        <div><label>lease end date</label>\n          <input class=\"pull-right\" type=\"text\" [value]=\"data.lease_end_date | date:'yyyy-MM-dd'\" [ngStyle]=\"styles.lease_end_date\"\n                 (change)=\"data.lease_end_date=$event.target.value\"></div>\n      </div>\n    </div>\n    <br>\n    <button type=\"button\" class=\"btn btn-secondary col-sm-2\" (click)=\"activeModal.dismiss()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-danger col-sm-2 pull-right\" (click)=\"update(data)\">Update</button>\n    <br>\n  </div>\n</div>\n"

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Create New</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container insert\">\n    <div *ngIf=\"error\" class=\"text-danger\">{{error}}</div>\n    <div class=\"greyarea\">\n      <h5 class=\"text-success\">Device Feature</h5>\n      <div ><label >Device SN *</label>\n        <input class=\"float-sm-right\" type=\"text\" [(ngModel)]=\"data.device_sn\" name=\"device_sn\" #device_sn=\"ngModel\" required>\n        <div *ngIf=\"device_sn.errors?.required && device_sn.touched\" class=\"form_msg text-right\">Device SN is Required</div>\n      </div>\n      <div ><label >status</label>\n        <select class=\"float-sm-right\" [(ngModel)]=\"data.status\">\n          <option value=\"\"></option>\n          <option *ngFor=\"let s of options.status\" [value]=\"s\">{{s}}</option>\n        </select>\n      </div>\n      <div ><label >location</label>\n        <select  [(ngModel)]=\"data.location\" class=\"float-sm-right\">\n          <option value=\"\"></option>\n          <option *ngFor=\"let location of options.location\" [value]=\"location\">{{location}}</option>\n        </select>\n      </div>\n      <div ><label >parent clinic</label>\n        <input class=\"float-sm-right\" type=\"text\"  [(ngModel)]=\"data.parent_clinic\"  [ngbTypeahead]=\"searchParentClinic\">\n      </div>\n      <div ><label >sub clinic</label>\n        <input class=\"float-sm-right\" type=\"text\"  [(ngModel)]=\"data.sub_clinic\" [ngbTypeahead]=\"searchSubClinic\" >\n      </div>\n      <div ><label >Checked out by</label>\n        <select  [(ngModel)]=\"data.checked_out_by\" class=\"float-sm-right\">\n          <option value=''></option>\n          <option *ngFor=\"let m of options.checked_by\" [value]=\"m\">{{m}}</option>\n        </select>\n      </div>\n      <div >\n        <label >checked out date</label>\n        <input class=\"float-sm-right\"  type=\"date\" [(ngModel)]=\"data.checked_out_date\">\n      </div>\n      <p>Or</p>\n      <div ><label >checked in by</label>\n        <select  [(ngModel)]=\"data.checked_in_by\" class=\"float-sm-right\">\n          <option value=\"\"></option>\n          <option *ngFor=\"let m of options.checked_by\" [value]=\"m\">{{m}}</option>\n        </select>\n      </div>\n      <div ><label >checked in date</label>\n        <input class=\"float-sm-right\"  type=\"date\" [(ngModel)]=\"data.checked_in_date\">\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <h5 class=\"text-primary\">Device Attributes</h5>\n        <div ><label >iccid</label><input class=\"float-sm-right\" type=\"text\"   [(ngModel)]=\"data.iccid\"></div>\n        <div ><label>imei</label><input class=\"float-sm-right\" type=\"text\"   [(ngModel)]=\"data.imei\"></div>\n        <div ><label >model number</label><input class=\"float-sm-right\"   type=\"text\" [(ngModel)]=\"data.model_number\"></div>\n        <div ><label >points to</label>\n          <select  [(ngModel)]=\"data.points_to\" class=\"float-sm-right\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.points_to\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n        <div >\n          <label >model description</label>\n          <select  [(ngModel)]=\"data.model_description\" class=\"float-sm-right\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.model_description\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n        <div>\n          <label >manufacturer</label>\n          <select  [(ngModel)]=\"data.manufacturer\" class=\"float-sm-right\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.manufacturer\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n        <div>\n          <label >firmware version</label>\n          <select  [(ngModel)]=\"data.firmware_version\" class=\"float-sm-right\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.firmware_version\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n        <div><label >zywie logo</label>\n          <select  [(ngModel)]=\"data.zywie_logo\" class=\"float-sm-right\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.yesOrNo\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n        <br>\n        <h5 class=\"text-primary\">SIM Attributes</h5>\n        <div>\n          <label>sim provider</label>\n          <select  [(ngModel)]=\"data.sim_provider\" class=\"float-sm-right\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.sim_provider\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n        <div><label>wyless provision_date</label>\n          <input class=\"float-sm-right\"   type=\"date\" [(ngModel)]=\"data.wyless_provision_date\">\n        </div>\n        <div><label>use zywie sim</label>\n          <select  [(ngModel)]=\"data.use_zywie_sim\" class=\"float-sm-right\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.yesOrNo\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <h5 class=\"text-primary\">Order Atrributes</h5>\n        <div><label>purchase order</label><input class=\"float-sm-right\"  type=\"text\" [(ngModel)]=\"data.purchase_order\"></div>\n        <div><label>registration date</label>\n          <input class=\"float-sm-right\"  type=\"date\" [(ngModel)]=\"data.registration_date\">\n        </div>\n        <br>\n        <h5 class=\"text-info\">Test Attributes</h5>\n        <div><label>device test date</label>\n          <input class=\"float-sm-right\"  type=\"date\" [(ngModel)]=\"data.device_test_date\">\n        </div>\n        <div><label>device suspend date</label>\n          <input class=\"float-sm-right\"  type=\"date\" [(ngModel)]=\"data.device_suspension_date\">\n        </div>\n        <br>\n        <h5 class=\"text-info\">Lease</h5>\n        <div><label>lease</label>\n          <select  [(ngModel)]=\"data.data\" class=\"float-sm-right\" class=\"float-sm-right\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let m of options.yesOrNo\" [value]=\"m\">{{m}}</option>\n          </select>\n        </div>\n        <div><label>lease price per month</label><input class=\"float-sm-right\"  type=\"text\" [(ngModel)]=\"data.lease_price_per_month\"></div>\n        <div><label>lease start date</label>\n          <input class=\"float-sm-right\"  type=\"date\" [(ngModel)]=\"data.lease_start_date\">\n        </div>\n        <div><label>lease end date</label>\n          <input class=\"float-sm-right\"  type=\"date\" [(ngModel)]=\"data.lease_end_date\">\n        </div>\n      </div>\n    </div>\n    <br>\n    <button type=\"button\" class=\"btn btn-secondary col-sm-2\" (click)=\"activeModal.dismiss()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-danger offset-sm-6 col-sm-2\" (click)=\"insert(data)\">Add</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p>\n<p>\n  homepage works!\n</p><p>\n  homepage works!\n</p>v\n<p>\n  homepage works!\n</p>\n\n\n"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <div class=\"login-box\">\n    <ngb-alert *ngIf=\"successMessage\" type=\"danger\" dismissible=\"true\" (close)=\"closeAlert()\">{{alert.message}}</ngb-alert>\n    <form #loginForm=\"ngForm\">\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-sm-3 col-form-label\">Email:</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" id=\"email\" name='userEmail' class=\"form-control\" [(ngModel)]=\"user.email\"  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                 placeholder=\"email\" required  #email=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"pwd\" class=\"col-sm-3 col-form-label\">Password: <span class=\"fa fa-key\"></span></label>\n        <div class=\"col-sm-9\">\n          <input  type=\"password\" id=\"pwd\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\"\n                  placeholder=\"password\" required #pwd=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\"  class=\"btn btn-danger offset-sm-3 col-sm-9\" (click)=\"submit(user)\" >log in</button>\n      </div>\n      <div class=\"form-actions\">\n        <br>\n        <a uiSref=\"signup\">Do not have an account, sign up here</a>\n      </div>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" uiSref=\"public.home\">\n    <i class=\"fa fa-home fa-2x\"></i>\n  </a>\n  <div class=\"collapse navbar-collapse \" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-center\" uiSref=\"public.dashboard\" uiSrefActive=\"active\">\n          <span class=\"fa fa-dashboard fa-2x\"></span>\n          <br class=\"hidden-xs\">Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle text-center\"  uiSrefActive=\"active\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <span class=\"fa fa-book fa-2x\"></span><br class=\"hidden-xs\">Device Management\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" uiSrefActive=\"active\" uiSref=\"public.deviceManagement\">Device Management</a>\n          <a class=\"dropdown-item\" uiSrefActive=\"active\" uiSref=\"public.deviceHistory\">Device History</a>\n          <a class=\"dropdown-item\" uiSrefActive=\"active\" uiSref=\"public.deviceInventory\">Device Inventory</a>\n          <a class=\"dropdown-item\" uiSrefActive=\"active\" uiSref=\"public.accessoryInventory\">Accessory Inventory</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-center\" uiSref=\"public.customerManagement\" uiSrefActive=\"active\">\n          <span class=\"fa fa-address-card fa-2x\"></span><br class=\"hidden-xs\">Customer\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\"  uiSrefActive=\"active\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <span class=\"fa fa-user-o fa-2x\"></span><br class=\"hidden-xs\">User Account\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\" uiSrefActive=\"active\">\n          <a class=\"nav-link\" uiSref=\"login\" >Log Out</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<ui-view></ui-view>\n\n<br><br><br><br><br><br>\n\n<footer class=\"panel-footer\">\n  <div class=\"text-center\">\n    &copy; Copyright Hong He 2017\n  </div>\n</footer>\n"

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container register-box\" [hidden]=\"submitted\">\n  <ngb-alert *ngIf=\"successMessage\" type=\"danger\" dismissible=\"true\" (close)=\"closeAlert()\">{{alert.message}}</ngb-alert>\n  <form #registerForm='ngForm'>\n    <h3 class=\"text-center\">Registration</h3>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" aria-describedby=\"firstNameHelp\"\n             placeholder=\"Your First Name\" [(ngModel)]=\"user.firstName\" required #firstName=\"ngModel\">\n      <div *ngIf=\"firstName.errors && firstName.touched\">\n        <span class=\"form_msg\"  *ngIf=\"firstName.errors && firstName.errors.required\">first name is required</span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Your Last Name\" aria-describedby=\"lastNameHelp\"\n             [(ngModel)]=\"user.lastName\"  required #lastName=\"ngModel\">\n      <div *ngIf=\"lastName.errors && lastName.touched\">\n        <span class=\"form_msg\"  *ngIf=\"lastName.errors.required\">last name is required</span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email:</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" aria-describedby=\"emailHelp\"\n             pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" [(ngModel)]=\"user.email\" required  #email=\"ngModel\">\n      <div *ngIf=\"email.errors && email.touched\">\n        <span class=\"form_msg \"  *ngIf=\"email.errors.required\">last name is required</span>\n        <span class=\"form_msg \"  *ngIf=\"email.errors.pattern\">Must be a valid email address: handle@domain format</span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"pwd\" name=\"pwd\" placeholder=\"Password\" aria-describedby=\"pwdHelp\"\n             [(ngModel)]=\"user.pwd\"  required #pwd=\"ngModel\">\n      <div *ngIf=\"pwd.errors && pwd.touched\">\n        <span class=\"form_msg\" *ngIf=\"pwd.errors.required\">password is required</span>\n      </div>\n    </div>\n    <!--enter password again-->\n    <div class=\"form-group\">\n      <label for=\"pwd2\">Confirm Password:</label>\n      <input type=\"password\" class=\"form-control\" name=\"pwd2\" id=\"pwd2\" placeholder=\" Confirm Password\"  aria-describedby=\"pwd2Help\"\n             [(ngModel)]=\"user.pwd2\"  required #pwd2=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"submit(user)\" [disabled]=\"registerForm.form.invalid\">sign up</button>\n    </div>\n  </form>\n  <br>\n  <a uiSref=\"login\">Already have an account, sign in here!</a>\n  <br><br><br>\n</div>\n\n<div [hidden]=\"!submitted\">\n  <h2>Thank you, you have successfully submitted!</h2>\n  <a uiSref=\"login\">log in here...</a>\n</div>\n"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<!--<input class=\"pull-right\" [(ngModel)]=\"data.parent_clinic\" [ngbTypeahead]=\"search\">-->\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(313);


/***/ })

},[747]);
//# sourceMappingURL=main.bundle.js.map