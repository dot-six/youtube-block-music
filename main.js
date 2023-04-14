// For homepage
const targetNode = document.body;
const config = { childList: true, subtree: true };
const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
                process(mutation.addedNodes);
        }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

const contentIdToRemove = ["content", "dismissible"];

function process(nodes) {
        for (const node of nodes) {
                node.parentNode?.querySelectorAll('.badge-style-type-verified-artist').forEach(x => {
                        let parent = x.parentNode;
                        while (parent && !contentIdToRemove.includes(parent.id)) {
                                parent = parent.parentNode;
                        }

                        preventBodyRemoval(parent);
                });

                if (node.href?.includes('start_radio=1')) {
                        let parent = node.parentNode;
                        while (parent && !contentIdToRemove.includes(parent.id)) {
                                parent = parent.parentNode;
                        }

                        preventBodyRemoval(parent);
                }
        }
}

function preventBodyRemoval(node) {
        if (node === document.body || node === document)  {
                // no-op
        } else {
                node?.remove();
        }
}
