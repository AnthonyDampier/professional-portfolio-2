import React from 'react';
import './ResourceHub.css';

// Define a simple resource data structure
const resources = {
    reactWebDevelopers: [
        { name: "React Official Documentation", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "React Router", url: "https://reactrouter.com/" },
        { name: "Redux", url: "https://redux.js.org/" },
        { name: "React Testing Library", url: "https://testing-library.com/docs/react-testing-library/intro/" },
        { name: "Create React App", url: "https://create-react-app.dev/" },
        { name: "React Hooks", url: "https://reactjs.org/docs/hooks-intro.html" },
    ],
    nextJsWebDevelopers: [
        { name: "Next.js Official Documentation", url: "https://nextjs.org/docs" },
        { name: "Learn Next.js", url: "https://nextjs.org/learn" },
        { name: "Next.js GitHub Repo", url: "https://github.com/vercel/next.js" },
        { name: "Next.js Examples", url: "https://github.com/vercel/next.js/tree/canary/examples" },
        { name: "Vercel Deployment", url: "https://vercel.com/docs" },
        { name: "Next.js SEO", url: "https://nextjs.org/docs/advanced-features/seo" },
    ],
    reactNativeDevelopers: [
        { name: "React Native Official Documentation", url: "https://reactnative.dev/docs/getting-started" },
        { name: "Expo", url: "https://expo.dev/" },
        { name: "React Navigation", url: "https://reactnavigation.org/" },
        { name: "NativeBase", url: "https://nativebase.io/" },
        { name: "React Native Testing Library", url: "https://callstack.github.io/react-native-testing-library/" },
        { name: "React Native Directory", url: "https://reactnative.directory/" },
    ],
    projectManagers: [
        { name: "Project Management Institute", url: "https://www.pmi.org/" },
        { name: "Agile Methodology", url: "https://agilemanifesto.org/" },
        { name: "Scrum Guide", url: "https://scrumguides.org/" },
    ],
    productManagers: [
        { name: "ProductPlan", url: "https://www.productplan.com/learn/" },
        { name: "Mind the Product", url: "https://www.mindtheproduct.com/" },
    ],
};

const ResourceHub = () => {
  // Helper function to render resources
    const renderResources = (resourceArray) => (
        <ul>
        {resourceArray.map(resource => (
            <li key={resource.url}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a>
            </li>
        ))}
        </ul>
    );

    return (
        <div className="professional-resources">
            <div>
                <h3>React Web Developers</h3>
                {renderResources(resources.reactWebDevelopers)}
            </div>
            <div>
                <h3>Next.js Web Developers</h3>
                {renderResources(resources.nextJsWebDevelopers)}
            </div>
            <div>
                <h3>React Native Developers</h3>
                {renderResources(resources.reactNativeDevelopers)}
            </div>
            <div>
                <h3>Project Managers</h3>
                {renderResources(resources.projectManagers)}
            </div>
            <div>
                <h3>Product Managers</h3>
                {renderResources(resources.productManagers)}
            </div>
        </div>
    );
};

export default ResourceHub;
