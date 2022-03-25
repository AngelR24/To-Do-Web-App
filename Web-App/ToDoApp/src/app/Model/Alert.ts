export class Alert {
  id: string = '';
  type: AlertType = 1;
  message: string = '';
  autoClose: boolean = false;
  keepAfterRouteChange: boolean = true;
  fade: boolean = true;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning,
}
