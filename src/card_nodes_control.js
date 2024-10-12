function getCardNodesIndexOf(id) {
    let index = card_nodes.findIndex(node => node.getAttribute('data-card-id') == id);
    return index;
}

function updateCardNode(id, newnode) {
    let index = getCardNodesIndexOf(id);
    card_nodes[index] = newnode;
}