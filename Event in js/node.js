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


  //new  concept
  function grep(parentNode, pattern) {
    let matches = [];
    let endScan = false;
  
    eachNode(parentNode, (node) => {
      if (endScan) {
        return false;
      }
  
      // Ignore anything which isn't a text node
      if (node.nodeType !== Node.TEXT_NODE) {
        return;
      }
  
      if (typeof pattern === "string" && node.textContent.includes(pattern)) {
        matches.push(node);
      } else if (pattern.test(node.textContent)) {
        if (!pattern.global) {
          endScan = true;
          matches = node;
        } else {
          matches.push(node);
        }
      }
    });
  
    return matches;
  }
  