export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li className="is-active" data-cy="Tab" key={tab.id}>
              <a
                href="#tab-1"
                data-cy="TabLink"
                onClick={() => onTabSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTabId.content}
      </div>
    </div>
  );
};
