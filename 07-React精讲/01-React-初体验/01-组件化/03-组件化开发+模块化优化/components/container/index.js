class Container extends React.Component {
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        )
    }
}