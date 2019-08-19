const WebComponent = function() {
  return null;
};

WebComponent.getMetadata = function() {
  return {
    getTag: function() {
      return 'ui5-web-component-mock';
    },
    getSlots: function() {
      return [];
    },
    getProperties: function() {
      return [];
    },
    getEvents: function() {
      return [];
    }
  };
};

module.exports = WebComponent;
