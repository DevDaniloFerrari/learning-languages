interface NumberDisplayProps {
    value: number;
}

export default function NumberDisplay(props: NumberDisplayProps) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: '50px',
            borderRadius: '25px',
            backgroundColor: '#222',
            color: '#fff',
            fontSize: '2rem',
            margin: '20px'
        }}>
            {props.value}
        </div>
    )
}