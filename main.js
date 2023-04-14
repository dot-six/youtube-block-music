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

function process(nodes) {
        for (const node of nodes) {
                node.parentNode?.querySelectorAll('.badge-style-type-verified-artist').forEach(x => {
                        let parent = x.parentNode;
                        while (parent && parent.id != "content") {
                                parent = parent.parentNode;
                        }

                        parent?.remove();
                });

                if (node.href?.includes('start_radio=1')) {
                        let parent = node.parentNode;
                        while (parent && parent.id != "content") {
                                parent = parent.parentNode;
                        }

                        parent?.remove(); 
                }
        }
}
