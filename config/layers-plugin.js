function cssLayersPlugin(opts) {
  opts = opts || {};

  return {
    postcssPlugin: 'css-layers-plugin',
    Once(root, { AtRule }) {
      const layer = new AtRule({
        name: 'layer',
        params: 'ui5-webcomponents-react',
        nodes: root.nodes
      });
      root.removeAll();
      root.append(layer);
    }
  };
}

cssLayersPlugin.postcss = true;

export default cssLayersPlugin;
