  flex-direction: column;
        flex: 1;
      }
      .container.horizontal {
        flex-direction: row;
      }
      .content {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
        flex: 1;
        min-width: 0;
        box-sizing: border-box;
        pointer-events: none;
        gap: 10px;
      }
      .vertical {
        flex-direction: column;
        text-align: center;
        justify-content: center;
      }
      .vertical ha-tile-info {
        width: 100%;
        flex: none;
      }
      .multiline {
        white-space: pre-wrap;
      }

      ha-tile-icon {
        --tile-icon-size: var(--mtc-tile-size, 50px);
        --tile-icon-width: var(--mtc-tile-size, 50px);
        --tile-icon-height: var(--mtc-tile-size, 50px);
        width: var(--tile-icon-width) !important;
        height: var(--tile-icon-height) !important;
        --mdc-icon-size: var(--mtc-icon-size, round(calc(var(--mtc-tile-size, 50px) * 0.66), 1px));
        position: relative;
        flex-shrink: 0;
      }

      ha-tile-icon.weather svg {
        width: var(--tile-icon-width) !important;
        height: var(--tile-icon-width) !important;
        display: flex;
      }

      ha-tile-icon.weather {
        --tile-icon-opacity: 0;
        --tile-icon-hover-opacity: 0;
        --tile-icon-border-radius: 0;
      }

      ha-tile-badge {
        --badge-size: var(--mtc-badge-size, round(calc(var(--mtc-tile-size, 50px) / 2.5), 1px));
        width: var(--badge-size) !important;
        height: var(--badge-size) !important;
        border-radius: 50% !important;
        --tile-badge-background-color: var(--badge-color, var(--secondary-text-color));
        --mdc-icon-size: var(--mtc-badge-icon-size, round(calc(var(--badge-size, 18px) / 1.3), 1px));
        position: absolute;
        top: 3px;
        right: 3px;
        inset-inline-end: 3px;
        inset-inline-start: initial;
      }

      ha-tile-badge span {
        font-size: 0.8rem;
        font-weight: bold;
        height: var(--badge-size);
        line-height: var(--badge-size);
      }

      ha-tile-info {
        position: relative;
        min-width: 0;
        transition: background-color 180ms ease-in-out;
        box-sizing: border-box;
      }
      hui-card-features {
        --feature-color: var(--tile-color);
        padding: 0 12px 12px 12px;
      }
      .container.horizontal hui-card-features {
        width: calc(50% - var(--column-gap, 0px) / 2 - 12px);
        flex: none;
        --feature-height: 36px;
        padding: 0 12px;
        padding-inline-start: 0;
      }
      .container.feature-only {
        justify-content: flex-end;
      }
      .container.feature-only hui-card-features {
        flex: 1;
        width: 100%;
        padding: 12px 12px 12px 12px;
      }
      .container.feature-only.horizontal hui-card-features {
        padding: 0 12px;
      }
      .container.horizontal .content:not(:has(ha-tile-info)) {
        flex: none;
      }
      .container.horizontal:not(:has(ha-tile-info)) hui-card-features {
        width: auto;
        flex: 1;
      }
      .container.horizontal:not(:has(ha-tile-info)) .content {
        flex: none;
      }
    `,
];
}

declare global {
  interface HTMLElementTagNameMap {
    "mushroom-template-card": MushroomTemplateCard;
  }
}
