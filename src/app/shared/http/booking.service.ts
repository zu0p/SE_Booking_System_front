import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../service/global.service';

@Injectable()
export class BookingService {

    constructor (private http: HttpClient, private global: GlobalService) {
    }

    // 전체 예약 현황
    public getBookingList (): Observable<any> {
        return this.http.get(this.global.url + `/booking`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        })
    }

    public getBookingInfoById (id: number): Observable<any> {
        return this.http.get(this.global.url + `/booking/${id}`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    // 메인화면용 예약 현황
    public getBookingInfoList (dateFlag: string): Observable<any> {
        return this.http.get(this.global.url + `/booking-info?date_flag=${dateFlag}`).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    // 마이페이지용 예약 현황
    public getBookingInfoListByUser (id: string): Observable<any> {
        return this.http.get(this.global.url + `/mypage?id=${id}`).map((res:any) => {
            if ( res.status === 'success') {
                return res.result;
            } else {
                alert( '[ERROR]: ' + res.result );
            }
        });
    }

    // 예약
    public book (bookingData: any): Observable<any> {
        return this.http.post(this.global.url + `/book`, bookingData).map((res: any) => {
            if ( res.status === 'success' ) {
                return res.result;
            } else {
                alert('[ERROR]: ' + res.result);
            }
        });
    }

    //예약취소
    public cancel(bookingId:number, cancelerId:string){
        let body={
            booking_id:bookingId,
            changer_id:cancelerId
        };
        return this.http.put(this.global.url + '/cancle-book', body);
    }

    //사용종료
    public end(bookingId:number, endId:string, endTime:string){
        let body={
            booking_id:bookingId,
            changer_id:endId,
            change_time:endTime
        };
        return this.http.put(this.global.url + '/end-book', body);
    }
}
