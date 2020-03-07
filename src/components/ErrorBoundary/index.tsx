import React, { ErrorInfo } from 'react'

interface Props {
    hasMultipleChildren?: boolean
}

interface State {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        this.logErrorToMyService(error, errorInfo);
    }

    logErrorToMyService(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.hasMultipleChildren ? <h1>Something went wrong in one component and all children of the <code>ErrorBoundary</code> didn't render.</h1> : <h1>Error boundary caught the error in <code>CComponent</code> and rendered the rest of the children. <a href='https://reactjs.org/docs/error-boundaries.html#new-behavior-for-uncaught-errors' target="_blank" rel="noopener noreferrer">explanation</a></h1>
        }

        return this.props.children;
    }
}