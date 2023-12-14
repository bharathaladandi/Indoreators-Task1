import React,{useState} from 'react';

export const HomePage = () => {

    
    const datas = [
        { id: 1, name: 'Onboarding Call', des1: '', des2: '', des3:'' },
        { id: 2, name: 'Google Search Console Access', des1: '', des2: '', des3:'' },
        { id: 3, name: 'Google Analytics Access', des1: '', des2: '', des3:'' },
        { id: 4, name: 'Website Access', des1: '', des2: '', des3:'' },
        { id: 5, name: 'Technical Audit', des1: '', des2: '', des3:'' },
        { id: 6, name: 'Competitor Analysis', des1: '', des2: '', des3:'' },
        { id: 7, name: 'Anchor Text/ URL Mapping', des1: '', des2: '', des3:'' },
        { id: 8, name: 'Site Level Optimization', des1: '', des2: '', des3:'' },
        { id: 9, name: 'On Page Optimization', des1: '', des2: '', des3:'' },
        { id: 10, name: 'Content Creation', des1: '', des2: '', des3:'' },
        { id: 11, name: 'Content Publishing', des1: '', des2: '', des3:'' }
    ];


    const [data, setData] = useState(datas);

    const handleChange = (id, items, value) => {
        setData(data.map(item => (item.id === id ? { ...item, [items]: value } : item)));
    };

    const handleSave = () => {
        console.log('Save data: ', data);
        alert("Data Saved")
    };


    return (
        <div>
            <div >
                <table border={1} style={{margin:'auto', width:"50%"}}>
                    <thead>
                        
                    <tr>
                            <th>MONTH 1</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <input
                                        type="text"
                                        value={item.name}
                                        onChange={e => handleChange(item.id, 'name', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.des1}
                                        onChange={e => handleChange(item.id, 'age', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="email"
                                        value={item.des2}
                                        onChange={e => handleChange(item.id, 'email', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="email"
                                        value={item.des3}
                                        onChange={e => handleChange(item.id, 'email', e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">
                                <button onClick={handleSave}>Save</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
