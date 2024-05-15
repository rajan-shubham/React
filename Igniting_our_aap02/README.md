# package.json -> it is a configuration for npm 
# it keep track of what version of the package is installed into our system

# package sometimes also konwn as dependencies (our project is dependent on a lot of packages)
# A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. A fantastic feature of a bundler is that it generates a dependency graph as it traverses your first code files
- Caching - Faster Build
- Image Optimization

# there are 2 dependencies that an app can have :-
    1> dev. dependencies (require in our devlopment phase)
    2> normal dependencies (used in production also)

# What is the difference between tilde and caret in npm package json?
# We've seen that the tilde () allows updates to the patch version of a package, while the caret (^) allows updates to the minor and patch versions of a package, while keeping the major version fixed.

# package-lock.json --> keeps a track of exact version that is being install(it lock the version and keeps a record on it)

# package-lock.json -> has a hash -> integrity": "sha512-z+16RoxK3fUPgwaIgH9NGnK1HKY9XIDpydky5eQGgAFVXTCSezalv9U2jQuNV+Z9qV1fDWNzldcw4eK0SSbqKA==" 
# to avoid (it is wroking in my local but break on production) that p-l.json keeps a hash to verify whatever is there in my machine is same verson which is deploy on to the production

# node module contain all the code that we fetched from npm

:- parcel as aproject has it's own dependencies, and that dependency has it's own dependencies --> this is known as transitive dependies

# node module -> is collection of all dependencies
- if i have packege & packege-lock i can regenerate my node module (even if node_modules will be deleted), as whatever you can regenerate don't put it over git.

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File watcher algorithm - made with C++
- Caching - Faster Build
- Image Optimization
- Minification of files
- Bundle our files
- Compress our files
- Consistent Hashing
- Code Splitting
- Differential Bundeling -> support older browsers also
- Diagnostic
- Error Handeling -> Better error suggestion
- Ability to host also an HTTPs
- Tree Shaking -> Remove Unused code for You
- Different dev and prod bundles

# To run project in devlopment mode
- npm run start
# To make the project production ready
- npm run build