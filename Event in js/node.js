function eachNode(rootNode, callback) {
    if (!callback) {
      const nodes = [];
      eachNode(rootNode, (node) => {
        nodes.push(node);
      });
      return nodes;
    }
  
    if (callback(rootNode) === false) {
      return false;
    }
  
    if (rootNode.hasChildNodes()) {
      for (const node of rootNode.childNodes) {
        if (eachNode(node, callback) === false) {
          return;
        }
      }
    }
  }