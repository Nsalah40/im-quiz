# Contributing to AI Marketing Knowledge Assessment

Thank you for your interest in contributing! This guide will help you get started.

## 🚀 Quick Start

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/im-quiz.git
   cd im-quiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Maintain component-based architecture

### Commit Messages
Use conventional commit format:
```
type(scope): description

feat(quiz): add new question validation
fix(form): resolve email validation bug
docs(readme): update installation steps
```

### Code Quality
- All code must pass `npm run lint`
- Ensure TypeScript compilation succeeds
- Test functionality before submitting PR

## 🔧 Project Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # Reusable React components
└── types/        # TypeScript type definitions
```

## 🎯 Areas for Contribution

### High Priority
- **Performance optimization** - Improve loading times
- **Accessibility** - Enhance WCAG compliance
- **Mobile experience** - Refine responsive design

### Medium Priority
- **Analytics integration** - Add tracking capabilities
- **Email automation** - Improve lead nurturing
- **Question bank** - Expand quiz content

### Low Priority
- **Visual enhancements** - UI/UX improvements
- **Documentation** - Code comments and guides
- **Testing** - Unit and integration tests

## 🚦 Pull Request Process

1. **Create descriptive PR title**
   ```
   feat: add quiz timer functionality
   fix: resolve mobile layout issues
   ```

2. **Include detailed description**
   - What changes were made
   - Why these changes were necessary
   - How to test the changes

3. **Ensure all checks pass**
   - Linting and type checking
   - Build succeeds
   - No breaking changes

4. **Request review**
   - Tag relevant reviewers
   - Respond to feedback promptly

## 🐛 Bug Reports

When reporting bugs, please include:

- **Environment details** (browser, device, OS)
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable

## 💡 Feature Requests

For new features, please provide:

- **Use case description** - Why is this needed?
- **Proposed solution** - How should it work?
- **Alternatives considered** - Other approaches?
- **Additional context** - Mockups, examples, etc.

## 📊 Performance Considerations

- Keep bundle size minimal
- Optimize images and assets
- Use Next.js best practices
- Monitor Core Web Vitals

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help newcomers get started
- Follow project guidelines

## 📞 Getting Help

- **GitHub Issues** - For bugs and features
- **Discussions** - For questions and ideas
- **Email** - For sensitive matters

---

Thank you for contributing to the AI marketing community! 🚀