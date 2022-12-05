export class Order {
  public client: string;
  private total: number;
  private status: string = "Open";

  constructor(client: string, total: number) {
    this.client = client;
    this.total = total;
  }

  setStatus(value: string): void {
    this.status = value;
  }

  getStatus(): string {
    return this.status;
  }

  GetOrderOtotal(): number {
    return this.total;
  }

  getClientName(): string {
    return this.client;
  }
}
