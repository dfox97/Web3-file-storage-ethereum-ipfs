import { Component, NgModule, OnInit, inject, signal } from '@angular/core';
import { EthDocUploaderService, FileInfo } from '../services/web3/eth-doc-uploader.service';
import { CommonModule, NgClass } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ViewerComponent {
  public data = signal<FileInfo | null>(null);
  index = 0;
  private readonly eth3Service = inject(EthDocUploaderService);


  //TODO: Make reactive form and get index from input
  async getFileInfo(index: number) {
    const data = await this.eth3Service.getFile(index);
    this.data.set(data);
  }
}
