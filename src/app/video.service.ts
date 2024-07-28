import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Video, VideoCategory } from './models';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) {

  }

  getVideos() {
    return this.http.get<Video[]>(`${environment.apiUrl}/videos/`)
  }

  getCategories() {
    return this.http.get<VideoCategory[]>(`${environment.apiUrl}/categories/`)
  }

}
