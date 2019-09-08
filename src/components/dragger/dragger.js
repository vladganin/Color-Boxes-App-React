import React from 'react';

const Boxblock = (props) => {
    const drop = e => {
        e.preventDefault();
        const box_id = e.dataTransfer.getData('box_id')
        const box = document.getElementById(box_id);
        box.style.display = 'block';

        e.target.appendChild(box);

    }

    const dragOver = e => {
        e.preventDefault();

    }

    return (
        <div
            style={props.style}
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}


const Box = (props) => {
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('box_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            onDragStart={dragStart}
            onDragOver={dragOver}
            style={props.style}
            draggable={props.draggable}
        >
            {props.children}
        </div>
    )
}



class Dragger extends React.Component {
    render() {
        let styling = {
            boxSizing: "border-box",
            width: "600px",
            height: "500px",
            backgroundColor: "lightgray",
            textAlign: 'center',
        }

        let dragstyle = {
            margin: "20px",
            width: "100px",
            height: "100px",
            backgroundColor: "red",
        }

        let boxblockstyle = {
            display: "flex",
            flexDirection: "row",
            width: "600px",
            height: "35%",
            border: "1px solid black"
        }
        return (
            <div style={styling}>
                <h1>hello from dragger</h1>
                <Boxblock id="box_1" style={boxblockstyle}>
                    <Box id="box-1" style={dragstyle} draggable="true">
                        <h1>first box</h1>
                    </Box>
                </Boxblock>
                <Boxblock id="box_2" style={boxblockstyle}>
                    <Box id="box-2" style={dragstyle} draggable="true">
                        <h1>second box</h1>
                    </Box>
                </Boxblock>
            </div >
        )
    }
}


export default Dragger;