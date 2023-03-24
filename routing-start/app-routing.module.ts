import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth-guard.service";
import { ErrorPageComponent } from "src/app/error-page/error-page.component";
import { HomeComponent } from "src/app/home/home.component";
import { NotFoundComponent } from "src/app/not-found/not-found.component";
import { CanDeactivateGuard } from "src/app/servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "src/app/servers/edit-server/edit-server.component";
import { ResolveServer } from "src/app/servers/server/resolve-server.service";
import { ServerComponent } from "src/app/servers/server/server.component";
import { ServersComponent } from "src/app/servers/servers.component";
import { UserComponent } from "src/app/users/user/user.component";
import { UsersComponent } from "src/app/users/users.component";

const appRoutes : Routes = [
    {path : '', component : HomeComponent},
    {path : 'users', component : UsersComponent,children:[
      {path : ':id/:name', component : UserComponent}
    ]},
    {path : 'servers', canActivateChild : [AuthGuard],component : ServersComponent, children : [
      {path : ':id', component : ServerComponent, resolve : {server : ResolveServer}},
      {path : ':id/edit', component : EditServerComponent, canDeactivate : [CanDeactivateGuard]}
    ]},
    // {path : 'not-found', component : NotFoundComponent},
    {path : 'not-found', component : ErrorPageComponent, data : {
      message : "Error! Page Not Found"
    }},
    {path : '**', redirectTo : '/not-found'}
  ]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes, {useHash : true})
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule{

}