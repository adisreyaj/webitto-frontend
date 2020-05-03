/*
 * File: code.helper.ts
 * Project: webitto-frontend
 * File Created: Sunday, 3rd May 2020 8:37:54 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Sunday, 3rd May 2020 9:06:51 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { highlight } from 'prismjs';

/**
 * Get the JSON grammar of *PrismJS*
 * @returns - JSON grammar object
 */
export function getHTMLGrammar() {
  return {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/,
          },
        },
        'attr-value': {
          pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
          inside: {
            punctuation: [
              /^=/,
              {
                pattern: /(^|[^\\])["']/,
                lookbehind: true,
              },
            ],
          },
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/,
          },
        },
      },
    },
    entity: /&#?[\da-z]{1,8};/i,
  };
}

/**
 * Add syntax highlighting to the code and
 * return the highlighted HTML
 * @param data - String to format
 */
export function formatCode(data: string) {
  return highlight(data, getHTMLGrammar(), 'html');
}
