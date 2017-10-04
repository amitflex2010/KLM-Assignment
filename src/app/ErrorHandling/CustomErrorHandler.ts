import {ErrorHandler} from '@angular/core';

export class CustomErrorHandler extends ErrorHandler {
   constructor() {
       super(false);
   }

/**
   * Handle all your typed error. rest will be handled by generic error handler.
   * @param {Error} error
   * @memberof CustomErrorHandler
   */
   public handleError(error: Error): void {
       super.handleError(error);
   }
}
