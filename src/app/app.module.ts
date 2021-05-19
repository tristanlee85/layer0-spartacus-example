import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { translations, translationChunksConfig } from '@spartacus/assets'
import { B2cStorefrontModule } from '@spartacus/storefront'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://layer0-docs-layer0-spartacus-example-default.moovweb-edge.io',
        },
      },
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa'],
        urlParameters: ['baseSite'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '3.0',
      },
    }),
    BrowserTransferStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
