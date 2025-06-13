import mockData from '../../../mockData/mockData.json';
import "./test.css"

function PlaybooksMain() {
    // Достаем массив playbooks из импортированных данных
    const { playbooks } = mockData;
    
    return (
      <div className="playbooks-container">
        {/* Заголовки таблицы */}
        <div className="playbooks-header">
            <div>Название</div>
            <div>Описание</div>
            <div>Последний запуск</div>
            <div>Статус</div>
            <div>Действия</div>
        </div>
        
        {/* Список плейбуков */}
        <div className="playbooks-list">
            {playbooks.map((playbook, index) => (
                <div key={index} className="playbook-item">
                    <div>{playbook.name}</div>
                    <div>{playbook.description}</div>
                    <div>{playbook.last_run}</div>
                    <div className={`status ${playbook.status.toLowerCase()}`}>
                        {playbook.status}
                    </div>
                    <div className="actions">
                        {playbook.actions.map((action, i) => (
                            <button key={i} className="action-button">
                                {action}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    )
}

export default PlaybooksMain;