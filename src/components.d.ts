/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  ColorVariable,
} from './components/color-gen/color-variables';
import {
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface CardLink {
    'hasIcon': boolean;
    'headline': string;
    'url': string;
  }
  interface CardLinkAttributes extends StencilHTMLAttributes {
    'hasIcon'?: boolean;
    'headline'?: string;
    'url'?: string;
  }

  interface CodeBlock {
    'language': string;
  }
  interface CodeBlockAttributes extends StencilHTMLAttributes {
    'language'?: string;
  }

  interface CodePreview {
    'inline': boolean;
    'markup': string;
  }
  interface CodePreviewAttributes extends StencilHTMLAttributes {
    'inline'?: boolean;
    'markup'?: string;
  }

  interface ColorAccordion {}
  interface ColorAccordionAttributes extends StencilHTMLAttributes {}

  interface ColorBlock {}
  interface ColorBlockAttributes extends StencilHTMLAttributes {}

  interface ColorGenerator {}
  interface ColorGeneratorAttributes extends StencilHTMLAttributes {
    'onPreviewMessage'?: (event: CustomEvent) => void;
  }

  interface ColorGenCssText {
    'cssText': string;
  }
  interface ColorGenCssTextAttributes extends StencilHTMLAttributes {
    'cssText'?: string;
    'onCssTextChange'?: (event: CustomEvent) => void;
  }

  interface ColorGenPreview {
    'cssText': string;
    'demoMode': string;
  }
  interface ColorGenPreviewAttributes extends StencilHTMLAttributes {
    'cssText'?: string;
    'demoMode'?: string;
  }

  interface ColorGenSelectColors {
    'colors': ColorVariable[];
  }
  interface ColorGenSelectColorsAttributes extends StencilHTMLAttributes {
    'colors'?: ColorVariable[];
  }

  interface ColorGenVariableSelector {
    'editable': boolean;
    'isParentOpen': boolean;
    'name': string;
    'property': string;
    'value': string;
  }
  interface ColorGenVariableSelectorAttributes extends StencilHTMLAttributes {
    'editable'?: boolean;
    'isParentOpen'?: boolean;
    'name'?: string;
    'onColorChange'?: (event: CustomEvent) => void;
    'property'?: string;
    'value'?: string;
  }

  interface CommandCursor {
    'blink': boolean;
  }
  interface CommandCursorAttributes extends StencilHTMLAttributes {
    'blink'?: boolean;
  }

  interface CommandLine {
    'nobuttons': boolean;
  }
  interface CommandLineAttributes extends StencilHTMLAttributes {
    'nobuttons'?: boolean;
  }

  interface CommandOutput {}
  interface CommandOutputAttributes extends StencilHTMLAttributes {}

  interface CommandPrompt {}
  interface CommandPromptAttributes extends StencilHTMLAttributes {}

  interface ComponentPreview {}
  interface ComponentPreviewAttributes extends StencilHTMLAttributes {
    'onPreviewMessage'?: (event: CustomEvent) => void;
  }

  interface CtrlDropdown {
    'autoClose': boolean;
    'autoCloseDelay': number;
    'items': any[];
    'onSelect': (selected: any) => void;
    'renderer': (component: any) => any;
    'setInitial': (items: any[]) => any;
  }
  interface CtrlDropdownAttributes extends StencilHTMLAttributes {
    'autoClose'?: boolean;
    'autoCloseDelay'?: number;
    'items'?: any[];
    'onSelect'?: (selected: any) => void;
    'renderer'?: (component: any) => any;
    'setInitial'?: (items: any[]) => any;
  }

  interface DocsContent {
    'onOverlayClick': () => void;
    'showOverlay': boolean;
  }
  interface DocsContentAttributes extends StencilHTMLAttributes {
    'onOverlayClick'?: () => void;
    'showOverlay'?: boolean;
  }

  interface DocsDocument {
    'isLoadingTimeout': number;
    'onUpdate': (document) => void;
    'path': string;
  }
  interface DocsDocumentAttributes extends StencilHTMLAttributes {
    'isLoadingTimeout'?: number;
    'onUpdate'?: (document) => void;
    'path'?: string;
  }

  interface DocsFooter {
    'frontmatter': any;
    'path': string;
  }
  interface DocsFooterAttributes extends StencilHTMLAttributes {
    'frontmatter'?: any;
    'path'?: string;
  }

  interface DocsHeader {
    'isMenuOpen': boolean;
    'onToggleClick': () => void;
    'section': string;
  }
  interface DocsHeaderAttributes extends StencilHTMLAttributes {
    'isMenuOpen'?: boolean;
    'onToggleClick'?: () => void;
    'section'?: string;
  }

  interface DocsLayout {}
  interface DocsLayoutAttributes extends StencilHTMLAttributes {}

  interface DocsMenu {
    'history': RouterHistory;
    'path': string;
    'section': string;
  }
  interface DocsMenuAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'path'?: string;
    'section'?: string;
  }

  interface DocsPreview {
    'source': string;
    'url': string;
  }
  interface DocsPreviewAttributes extends StencilHTMLAttributes {
    'source'?: string;
    'url'?: string;
  }

  interface DocsRoot {}
  interface DocsRootAttributes extends StencilHTMLAttributes {}

  interface FileTreeDirectory {
    'collapsed': boolean;
    'name': string;
  }
  interface FileTreeDirectoryAttributes extends StencilHTMLAttributes {
    'collapsed'?: boolean;
    'name'?: string;
  }

  interface FileTreeFile {
    'name': string;
  }
  interface FileTreeFileAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface FileTree {}
  interface FileTreeAttributes extends StencilHTMLAttributes {}

  interface ImgZoom {}
  interface ImgZoomAttributes extends StencilHTMLAttributes {}

  interface IonicSearch {
    'mobile': boolean;
  }
  interface IonicSearchAttributes extends StencilHTMLAttributes {
    'mobile'?: boolean;
  }

  interface LoadingIndicator {}
  interface LoadingIndicatorAttributes extends StencilHTMLAttributes {}

  interface SectionSwitch {
    'section': string;
  }
  interface SectionSwitchAttributes extends StencilHTMLAttributes {
    'section'?: string;
  }

  interface TabGroup {
    'initial': string;
    'tabs': string;
  }
  interface TabGroupAttributes extends StencilHTMLAttributes {
    'initial'?: string;
    'tabs'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'CardLink': Components.CardLink;
    'CodeBlock': Components.CodeBlock;
    'CodePreview': Components.CodePreview;
    'ColorAccordion': Components.ColorAccordion;
    'ColorBlock': Components.ColorBlock;
    'ColorGenerator': Components.ColorGenerator;
    'ColorGenCssText': Components.ColorGenCssText;
    'ColorGenPreview': Components.ColorGenPreview;
    'ColorGenSelectColors': Components.ColorGenSelectColors;
    'ColorGenVariableSelector': Components.ColorGenVariableSelector;
    'CommandCursor': Components.CommandCursor;
    'CommandLine': Components.CommandLine;
    'CommandOutput': Components.CommandOutput;
    'CommandPrompt': Components.CommandPrompt;
    'ComponentPreview': Components.ComponentPreview;
    'CtrlDropdown': Components.CtrlDropdown;
    'DocsContent': Components.DocsContent;
    'DocsDocument': Components.DocsDocument;
    'DocsFooter': Components.DocsFooter;
    'DocsHeader': Components.DocsHeader;
    'DocsLayout': Components.DocsLayout;
    'DocsMenu': Components.DocsMenu;
    'DocsPreview': Components.DocsPreview;
    'DocsRoot': Components.DocsRoot;
    'FileTreeDirectory': Components.FileTreeDirectory;
    'FileTreeFile': Components.FileTreeFile;
    'FileTree': Components.FileTree;
    'ImgZoom': Components.ImgZoom;
    'IonicSearch': Components.IonicSearch;
    'LoadingIndicator': Components.LoadingIndicator;
    'SectionSwitch': Components.SectionSwitch;
    'TabGroup': Components.TabGroup;
  }

  interface StencilIntrinsicElements {
    'card-link': Components.CardLinkAttributes;
    'code-block': Components.CodeBlockAttributes;
    'code-preview': Components.CodePreviewAttributes;
    'color-accordion': Components.ColorAccordionAttributes;
    'color-block': Components.ColorBlockAttributes;
    'color-generator': Components.ColorGeneratorAttributes;
    'color-gen-css-text': Components.ColorGenCssTextAttributes;
    'color-gen-preview': Components.ColorGenPreviewAttributes;
    'color-gen-select-colors': Components.ColorGenSelectColorsAttributes;
    'color-gen-variable-selector': Components.ColorGenVariableSelectorAttributes;
    'command-cursor': Components.CommandCursorAttributes;
    'command-line': Components.CommandLineAttributes;
    'command-output': Components.CommandOutputAttributes;
    'command-prompt': Components.CommandPromptAttributes;
    'component-preview': Components.ComponentPreviewAttributes;
    'ctrl-dropdown': Components.CtrlDropdownAttributes;
    'docs-content': Components.DocsContentAttributes;
    'docs-document': Components.DocsDocumentAttributes;
    'docs-footer': Components.DocsFooterAttributes;
    'docs-header': Components.DocsHeaderAttributes;
    'docs-layout': Components.DocsLayoutAttributes;
    'docs-menu': Components.DocsMenuAttributes;
    'docs-preview': Components.DocsPreviewAttributes;
    'docs-root': Components.DocsRootAttributes;
    'file-tree-directory': Components.FileTreeDirectoryAttributes;
    'file-tree-file': Components.FileTreeFileAttributes;
    'file-tree': Components.FileTreeAttributes;
    'img-zoom': Components.ImgZoomAttributes;
    'ionic-search': Components.IonicSearchAttributes;
    'loading-indicator': Components.LoadingIndicatorAttributes;
    'section-switch': Components.SectionSwitchAttributes;
    'tab-group': Components.TabGroupAttributes;
  }


  interface HTMLCardLinkElement extends Components.CardLink, HTMLStencilElement {}
  var HTMLCardLinkElement: {
    prototype: HTMLCardLinkElement;
    new (): HTMLCardLinkElement;
  };

  interface HTMLCodeBlockElement extends Components.CodeBlock, HTMLStencilElement {}
  var HTMLCodeBlockElement: {
    prototype: HTMLCodeBlockElement;
    new (): HTMLCodeBlockElement;
  };

  interface HTMLCodePreviewElement extends Components.CodePreview, HTMLStencilElement {}
  var HTMLCodePreviewElement: {
    prototype: HTMLCodePreviewElement;
    new (): HTMLCodePreviewElement;
  };

  interface HTMLColorAccordionElement extends Components.ColorAccordion, HTMLStencilElement {}
  var HTMLColorAccordionElement: {
    prototype: HTMLColorAccordionElement;
    new (): HTMLColorAccordionElement;
  };

  interface HTMLColorBlockElement extends Components.ColorBlock, HTMLStencilElement {}
  var HTMLColorBlockElement: {
    prototype: HTMLColorBlockElement;
    new (): HTMLColorBlockElement;
  };

  interface HTMLColorGeneratorElement extends Components.ColorGenerator, HTMLStencilElement {}
  var HTMLColorGeneratorElement: {
    prototype: HTMLColorGeneratorElement;
    new (): HTMLColorGeneratorElement;
  };

  interface HTMLColorGenCssTextElement extends Components.ColorGenCssText, HTMLStencilElement {}
  var HTMLColorGenCssTextElement: {
    prototype: HTMLColorGenCssTextElement;
    new (): HTMLColorGenCssTextElement;
  };

  interface HTMLColorGenPreviewElement extends Components.ColorGenPreview, HTMLStencilElement {}
  var HTMLColorGenPreviewElement: {
    prototype: HTMLColorGenPreviewElement;
    new (): HTMLColorGenPreviewElement;
  };

  interface HTMLColorGenSelectColorsElement extends Components.ColorGenSelectColors, HTMLStencilElement {}
  var HTMLColorGenSelectColorsElement: {
    prototype: HTMLColorGenSelectColorsElement;
    new (): HTMLColorGenSelectColorsElement;
  };

  interface HTMLColorGenVariableSelectorElement extends Components.ColorGenVariableSelector, HTMLStencilElement {}
  var HTMLColorGenVariableSelectorElement: {
    prototype: HTMLColorGenVariableSelectorElement;
    new (): HTMLColorGenVariableSelectorElement;
  };

  interface HTMLCommandCursorElement extends Components.CommandCursor, HTMLStencilElement {}
  var HTMLCommandCursorElement: {
    prototype: HTMLCommandCursorElement;
    new (): HTMLCommandCursorElement;
  };

  interface HTMLCommandLineElement extends Components.CommandLine, HTMLStencilElement {}
  var HTMLCommandLineElement: {
    prototype: HTMLCommandLineElement;
    new (): HTMLCommandLineElement;
  };

  interface HTMLCommandOutputElement extends Components.CommandOutput, HTMLStencilElement {}
  var HTMLCommandOutputElement: {
    prototype: HTMLCommandOutputElement;
    new (): HTMLCommandOutputElement;
  };

  interface HTMLCommandPromptElement extends Components.CommandPrompt, HTMLStencilElement {}
  var HTMLCommandPromptElement: {
    prototype: HTMLCommandPromptElement;
    new (): HTMLCommandPromptElement;
  };

  interface HTMLComponentPreviewElement extends Components.ComponentPreview, HTMLStencilElement {}
  var HTMLComponentPreviewElement: {
    prototype: HTMLComponentPreviewElement;
    new (): HTMLComponentPreviewElement;
  };

  interface HTMLCtrlDropdownElement extends Components.CtrlDropdown, HTMLStencilElement {}
  var HTMLCtrlDropdownElement: {
    prototype: HTMLCtrlDropdownElement;
    new (): HTMLCtrlDropdownElement;
  };

  interface HTMLDocsContentElement extends Components.DocsContent, HTMLStencilElement {}
  var HTMLDocsContentElement: {
    prototype: HTMLDocsContentElement;
    new (): HTMLDocsContentElement;
  };

  interface HTMLDocsDocumentElement extends Components.DocsDocument, HTMLStencilElement {}
  var HTMLDocsDocumentElement: {
    prototype: HTMLDocsDocumentElement;
    new (): HTMLDocsDocumentElement;
  };

  interface HTMLDocsFooterElement extends Components.DocsFooter, HTMLStencilElement {}
  var HTMLDocsFooterElement: {
    prototype: HTMLDocsFooterElement;
    new (): HTMLDocsFooterElement;
  };

  interface HTMLDocsHeaderElement extends Components.DocsHeader, HTMLStencilElement {}
  var HTMLDocsHeaderElement: {
    prototype: HTMLDocsHeaderElement;
    new (): HTMLDocsHeaderElement;
  };

  interface HTMLDocsLayoutElement extends Components.DocsLayout, HTMLStencilElement {}
  var HTMLDocsLayoutElement: {
    prototype: HTMLDocsLayoutElement;
    new (): HTMLDocsLayoutElement;
  };

  interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {}
  var HTMLDocsMenuElement: {
    prototype: HTMLDocsMenuElement;
    new (): HTMLDocsMenuElement;
  };

  interface HTMLDocsPreviewElement extends Components.DocsPreview, HTMLStencilElement {}
  var HTMLDocsPreviewElement: {
    prototype: HTMLDocsPreviewElement;
    new (): HTMLDocsPreviewElement;
  };

  interface HTMLDocsRootElement extends Components.DocsRoot, HTMLStencilElement {}
  var HTMLDocsRootElement: {
    prototype: HTMLDocsRootElement;
    new (): HTMLDocsRootElement;
  };

  interface HTMLFileTreeDirectoryElement extends Components.FileTreeDirectory, HTMLStencilElement {}
  var HTMLFileTreeDirectoryElement: {
    prototype: HTMLFileTreeDirectoryElement;
    new (): HTMLFileTreeDirectoryElement;
  };

  interface HTMLFileTreeFileElement extends Components.FileTreeFile, HTMLStencilElement {}
  var HTMLFileTreeFileElement: {
    prototype: HTMLFileTreeFileElement;
    new (): HTMLFileTreeFileElement;
  };

  interface HTMLFileTreeElement extends Components.FileTree, HTMLStencilElement {}
  var HTMLFileTreeElement: {
    prototype: HTMLFileTreeElement;
    new (): HTMLFileTreeElement;
  };

  interface HTMLImgZoomElement extends Components.ImgZoom, HTMLStencilElement {}
  var HTMLImgZoomElement: {
    prototype: HTMLImgZoomElement;
    new (): HTMLImgZoomElement;
  };

  interface HTMLIonicSearchElement extends Components.IonicSearch, HTMLStencilElement {}
  var HTMLIonicSearchElement: {
    prototype: HTMLIonicSearchElement;
    new (): HTMLIonicSearchElement;
  };

  interface HTMLLoadingIndicatorElement extends Components.LoadingIndicator, HTMLStencilElement {}
  var HTMLLoadingIndicatorElement: {
    prototype: HTMLLoadingIndicatorElement;
    new (): HTMLLoadingIndicatorElement;
  };

  interface HTMLSectionSwitchElement extends Components.SectionSwitch, HTMLStencilElement {}
  var HTMLSectionSwitchElement: {
    prototype: HTMLSectionSwitchElement;
    new (): HTMLSectionSwitchElement;
  };

  interface HTMLTabGroupElement extends Components.TabGroup, HTMLStencilElement {}
  var HTMLTabGroupElement: {
    prototype: HTMLTabGroupElement;
    new (): HTMLTabGroupElement;
  };

  interface HTMLElementTagNameMap {
    'card-link': HTMLCardLinkElement
    'code-block': HTMLCodeBlockElement
    'code-preview': HTMLCodePreviewElement
    'color-accordion': HTMLColorAccordionElement
    'color-block': HTMLColorBlockElement
    'color-generator': HTMLColorGeneratorElement
    'color-gen-css-text': HTMLColorGenCssTextElement
    'color-gen-preview': HTMLColorGenPreviewElement
    'color-gen-select-colors': HTMLColorGenSelectColorsElement
    'color-gen-variable-selector': HTMLColorGenVariableSelectorElement
    'command-cursor': HTMLCommandCursorElement
    'command-line': HTMLCommandLineElement
    'command-output': HTMLCommandOutputElement
    'command-prompt': HTMLCommandPromptElement
    'component-preview': HTMLComponentPreviewElement
    'ctrl-dropdown': HTMLCtrlDropdownElement
    'docs-content': HTMLDocsContentElement
    'docs-document': HTMLDocsDocumentElement
    'docs-footer': HTMLDocsFooterElement
    'docs-header': HTMLDocsHeaderElement
    'docs-layout': HTMLDocsLayoutElement
    'docs-menu': HTMLDocsMenuElement
    'docs-preview': HTMLDocsPreviewElement
    'docs-root': HTMLDocsRootElement
    'file-tree-directory': HTMLFileTreeDirectoryElement
    'file-tree-file': HTMLFileTreeFileElement
    'file-tree': HTMLFileTreeElement
    'img-zoom': HTMLImgZoomElement
    'ionic-search': HTMLIonicSearchElement
    'loading-indicator': HTMLLoadingIndicatorElement
    'section-switch': HTMLSectionSwitchElement
    'tab-group': HTMLTabGroupElement
  }

  interface ElementTagNameMap {
    'card-link': HTMLCardLinkElement;
    'code-block': HTMLCodeBlockElement;
    'code-preview': HTMLCodePreviewElement;
    'color-accordion': HTMLColorAccordionElement;
    'color-block': HTMLColorBlockElement;
    'color-generator': HTMLColorGeneratorElement;
    'color-gen-css-text': HTMLColorGenCssTextElement;
    'color-gen-preview': HTMLColorGenPreviewElement;
    'color-gen-select-colors': HTMLColorGenSelectColorsElement;
    'color-gen-variable-selector': HTMLColorGenVariableSelectorElement;
    'command-cursor': HTMLCommandCursorElement;
    'command-line': HTMLCommandLineElement;
    'command-output': HTMLCommandOutputElement;
    'command-prompt': HTMLCommandPromptElement;
    'component-preview': HTMLComponentPreviewElement;
    'ctrl-dropdown': HTMLCtrlDropdownElement;
    'docs-content': HTMLDocsContentElement;
    'docs-document': HTMLDocsDocumentElement;
    'docs-footer': HTMLDocsFooterElement;
    'docs-header': HTMLDocsHeaderElement;
    'docs-layout': HTMLDocsLayoutElement;
    'docs-menu': HTMLDocsMenuElement;
    'docs-preview': HTMLDocsPreviewElement;
    'docs-root': HTMLDocsRootElement;
    'file-tree-directory': HTMLFileTreeDirectoryElement;
    'file-tree-file': HTMLFileTreeFileElement;
    'file-tree': HTMLFileTreeElement;
    'img-zoom': HTMLImgZoomElement;
    'ionic-search': HTMLIonicSearchElement;
    'loading-indicator': HTMLLoadingIndicatorElement;
    'section-switch': HTMLSectionSwitchElement;
    'tab-group': HTMLTabGroupElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
