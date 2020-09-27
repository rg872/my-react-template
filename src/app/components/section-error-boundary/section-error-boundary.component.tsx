import React, { ErrorInfo, Component, ReactNode } from 'react';
import './section-error-boundary.component.scss';

interface IProps {
  children: ReactNode;
}
interface IState {
  hasError: boolean;
}

export default class SectionErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean } {
    // Update state so the next render will show the fallback UI.
    console.log('ERROR BOUNDARY getDerivedStateFromError', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log('ERROR BOUNDARY componentDidCatch', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
