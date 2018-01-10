import { ErrorNotifier } from './error-notifier.service';
import { LocalStorageService } from "./local-storage.service";

export class UtilityService {
    localStorageService = new LocalStorageService;

    handleError = (error) => {
        // this.loggingAspect.invokeOnThrowOfMethod(error);
        var errorNotifier = new ErrorNotifier;
        errorNotifier.notifyError(error);
    }

    isLoggedIn = () => {
        if (this.localStorageService.getValue('accessToken')) {
            return true;
        } else {
            return false;
        }
    }

    navigateToState = (state) => {
        // this._router.navigate([state]);
    }
}