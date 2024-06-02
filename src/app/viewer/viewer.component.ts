import { Component, inject, signal } from '@angular/core';
import { EthDocUploaderService, FileInfo } from '../services/web3/eth-doc-uploader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ViewerComponent {
  public readonly data = signal<FileInfo | null>(null);
  public readonly index = signal<number>(0);

  private readonly eth3Service = inject(EthDocUploaderService);

  setIndex(ev: KeyboardEvent) {
    ev.stopPropagation();

    this.index.set(Number(ev.key));
  }

  async getFileInfo(index: number) {
    const data = await this.eth3Service.getFile(index);
    this.data.set(data);
  }
}
