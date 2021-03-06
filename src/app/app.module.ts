import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SolutionComponent } from './solver/solution/solution.component';
import { AboutComponent } from './about/about.component';
import { SolverComponent } from './solver/solver.component';
import { ExampleProblemsComponent } from './solver/problem/example-problems/example-problems.component';
import { ProblemLoaderComponent } from './solver/problem/problem-loader/problem-loader.component';
import { SrcProblemComponent } from './solver/problem/src-problem/src-problem.component';
import {ServerService} from './services/server.service';
import { HttpClientModule } from '@angular/common/http';
import {DropdownDirective} from './shared/dropdown.directive';
import { RuleComponent } from './solver/problem/problem-loader/rule/rule.component';
import { FileHelpersModule } from 'ngx-file-helpers';
import { WscpComponent } from './solver/problem/problem-loader/wscp/wscp.component';
import { WcnfComponent } from './solver/problem/problem-loader/wcnf/wcnf.component';
import {WscpRuleComponent} from './solver/problem/problem-loader/wscp/wscp-rule/wscp-rule.component';
import { WscpVariableComponent } from './solver/problem/problem-loader/wscp/wscp-variable/wscp-variable.component';
import { WcnfRuleComponent } from './solver/problem/problem-loader/wcnf/wcnf-rule/wcnf-rule.component';
import { WcnVariableComponent } from './solver/problem/problem-loader/wcnf/wcn-variable/wcn-variable.component';


const appRoutes: Routes = [
  {path: '', component: AboutComponent},
  { path: 'about', component: AboutComponent},
  { path: 'solver', component: SolverComponent, children: [
      { path: 'fromSrc', component: SrcProblemComponent },
      { path: 'loader', component: ProblemLoaderComponent },
      { path: 'examples', component: ExampleProblemsComponent }
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SolutionComponent,
    AboutComponent,
    SolverComponent,
    ExampleProblemsComponent,
    ProblemLoaderComponent,
    SrcProblemComponent,
    DropdownDirective,
    RuleComponent,
    WscpComponent,
    WcnfComponent,
    WscpRuleComponent,
    WscpVariableComponent,
    WcnfRuleComponent,
    WcnVariableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FileHelpersModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
