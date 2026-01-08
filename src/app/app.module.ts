import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { CardComponent } from './component/card/card.component';
import { AccordionComponent } from './component/accordion/accordion.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { RatingComponent } from './component/rating/rating.component';
import { GotoTopComponent } from './component/goto-top/goto-top.component';
import { QuoteComponent } from './component/quote/quote.component';
import { ComponentPageComponent } from './template/component-page/component-page.component';
import { PipesPageComponent } from './template/pipes-page/pipes-page.component';
import { DirectivesPageComponent } from './template/directives-page/directives-page.component';
import { ServicesPageComponent } from './template/services-page/services-page.component';
import { OtherPageComponent } from './template/other-page/other-page.component';
import { ButtonComponent } from './component/button/button.component';
import { DebounceClickDirective } from './directive/debounce-click.directive';
import { CreditCardFormaterPipe } from './pipes/credit-card-formater.pipe';
import { FilterTermPipe } from './pipes/filter-term.pipe';
import { FlattenPipe } from './pipes/flatten.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ToggleComponent } from './component/toggle/toggle.component';
import { DebounceSearchComponent } from './component/debounce-search/debounce-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchListComponent } from './component/search-list/search-list.component';
import { CounterComponent } from './component/counter/counter.component';
import { RippleDirective } from './directive/ripple.directive';
import { TableComponent } from './component/table/table.component';
import { PagingComponent } from './component/paging/paging.component';
import { TabComponent } from './component/tab/tab.component';
import { SortTableComponent } from './component/sort-table/sort-table.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { RibbonComponent } from './component/ribbon/ribbon.component';
import { ButtonToggleComponent } from './component/button-toggle/button-toggle.component';
import { BannerCutoutComponent } from './component/banner-cutout/banner-cutout.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { CountdownTimerComponent } from './component/countdown-timer/countdown-timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './component/popup/popup.component';
import { FooterComponent } from './component/footer/footer.component';
import { SkeletonLoaderComponent } from './component/skeleton-loader/skeleton-loader.component';
import { SocialMediaBarComponent } from './component/social-media-bar/social-media-bar.component';
import { BottonSheetComponent } from './component/botton-sheet/botton-sheet.component';
import { FieldsetToggleComponent } from './component/fieldset-toggle/fieldset-toggle.component';
import { PillComponent } from './component/pill/pill.component';
import { PillFilterComponent } from './component/pill-filter/pill-filter.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PassowrdComponent } from './component/passowrd/passowrd.component';
import { OverlayComponent } from './component/overlay/overlay.component';
import { ScaleDirective } from './directive/scale.directive';
import { CopyDirective } from './directive/copy.directive';
import { RichTextPipe } from './pipes/rich-text.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { CreditCardComponentComponent } from './component/credit-card-component/credit-card-component.component';
import { SortByKeyPipe } from './pipes/sort-by-key.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ModelComponent } from './component/model/model.component';
import { AutoFocusDirective } from './directive/auto-focus.directive';
import { LoaderCircularComponent } from './component/loader-circular/loader-circular.component'
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    RatingComponent,
    GotoTopComponent,
    QuoteComponent,
    ComponentPageComponent,
    PipesPageComponent,
    DirectivesPageComponent,
    ServicesPageComponent,
    OtherPageComponent,
    ButtonComponent,
    DebounceClickDirective,
    CreditCardFormaterPipe,
    FilterTermPipe,
    FlattenPipe,
    TruncatePipe,
    ToggleComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    RippleDirective,
    TableComponent,
    PagingComponent,
    TabComponent,
    SortTableComponent,
    ReactiveFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    BannerCutoutComponent,
    SnackbarComponent,
    CountdownTimerComponent,
    PopupComponent,
    FooterComponent,
    SkeletonLoaderComponent,
    SocialMediaBarComponent,
    BottonSheetComponent,
    FieldsetToggleComponent,
    PillComponent,
    PillFilterComponent,
    NotFoundComponent,
    PassowrdComponent,
    OverlayComponent,
    ScaleDirective,
    CopyDirective,
    RichTextPipe,
    SortPipe,
    CreditCardComponentComponent,
    SortByKeyPipe,
    ModelComponent,
    AutoFocusDirective,
    LoaderCircularComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: 'Navigator', useValue: navigator },
    { provide: 'Document', useValue: document },
    {provide: 'LocalStorage' , useValue: window.localStorage },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
