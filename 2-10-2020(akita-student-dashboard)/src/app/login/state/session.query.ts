import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { filter, map } from 'rxjs/operators';
import { SessionState, SessionStore } from './session.store';

@Injectable({
    providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
//DML operations that are performing as a part of the store
    isLoggedIn$ = this.select(({ user }) => toBoolean(user));
//select() methods selects a slice from the store and encapulate in query class hidden from data source

    loggedInUser$ = this.select().pipe(
        filter(({ user }) => toBoolean(user)),
        map(({ user: { firstName: f, lastName: l } }) => `${f} ${l}`)
    );

    constructor(protected store: SessionStore) {
        super(store);
    }

    isLoggedIn() {
        return toBoolean(this.getSnapshot().user);
    }
}
