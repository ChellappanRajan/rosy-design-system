import {
  nothing,
  ReactiveController,
  ReactiveControllerHost,
  render,
  RenderOptions,
} from 'lit';

type LightDomOptions = {
  render: () => unknown;
  renderOptions?: RenderOptions;
};

export class LightDomController implements ReactiveController {
  constructor(
    private host: HTMLElement & ReactiveControllerHost,
    private options: LightDomOptions
  ) {
    host.addController(this);
  }

  hostUpdated() {
    this.render();
  }

  hostDisconnected() {
    render(nothing, this.host, this.options.renderOptions);
  }

  private render() {
    //this will append element inside host <app-select> which intern will trigger onslot changes
    render(this.options.render(), this.host, this.options.renderOptions);
  }
}
