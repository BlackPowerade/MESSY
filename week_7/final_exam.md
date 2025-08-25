## Part 1

1. The extended V model is (at least as I see it) a way of adapting agile methodology to software testing practices. Where the overall software development lifecycle is modeled similarly to how testing is done, with 4 parts to each component. A development phase, physical deliverable, test phase, and final artifact are associated with each where the specific part depends on the aspect of the SDLC. Like how the program development would be split in to the actual implementation, the source code deliverable, code reviews as "testing" and review reports the final artifact. Or that the business side of things would be the development of the requirements, the requirements specification document, acceptance testing, and the final artifact being the results of the test plan.

2. The quadrants are defined along 2 axixes. the tech <-> business axis, and the external/internal axis. Where tech/business is about the technology underpinning a product and business is the business logic, and internal/external is "testing for the team" vs "testing for the user". quadrant 1 (tech/internal) would be things like unit tests, static code anaylsis, and linters. quadrant 2 (biz/internal) would be requirements testing and organizational compliance reviews. quad 3 (tech/external) would be things like performance testing, reliability testing, security integrity (if applicable). quad 4 (external/biz) is all about human interaction with the product, gathering user feedback, and user workflows within the product.

3. Black box testing is testing without being able to see what is going on under the hood while white box testing is being able to see what is going on. Mainly a difference in whether the details on how a correct result is given matters or not. eg. Black box testing a check password function would not care how the check is done, just that it returns true when it should and false when it should (or shouldn't). White box testing would be testing that the check password function returns true by taking the user inputted string, hashing it, and checking against the hash stored in database, returning true when the results are equal, false when the results are not equal, and returning null if it was unable to contact the database or any type of communication error occurred.

4. An error is any kinda of mistake during software development. Say during a requirements meeting a dev mishears what was said and mistakes that limit for a value should be 1 billion rather than 1 million. A fault is the manifestation of an error, like the previous error being coded in as `x < 1000000000`. And a failure is observable result of a fault, like the previous number being the money cap for a video game as the visual counter can only fit 7 digits so the actual money amount is say `900341234` but players only see `0341234` and can continue spending even if the counter says `0000000`.

## Part 2

Shouldn't. It mostly comes down to a question of speed vs. completeness and impartiality. Having the same manager for testers and implementers is great in that it reduces agile cycle time and all the bureaucracy that surrounds it, but ultimately the bureaucracy is there for a reason. QA has to be under seperate leadership than the implementers because management may become tempted to pressure QA into letting things slide or ease stringency of requirements if QA rejects too often. It compromises the integrity of testing. That isn't to say that QA should be completely walled off from the devs, as I myself have had to deal with this, a QA team that has barely any know-how and ends up demanding the developers move mountains to solve something they view as a big issue but isn't a issue at all. (my personal example being needing to implement CSRF protections on every single endpoint in a application, regardless of whether or not those endpoints interacted with sensitive data or not. Perhaps not hard, but completely unneccessary.)

## Part 3

### Description

A stereo typical hotel reservation system brought to you by softwr.ai, where all of our are supercharged with the power of LLMs. This reservation system manages guest bookings, payments, and room availability through a plethora of microservices, enchanced with AI. Our inventory management service lies at the core, providing create, update, retrieve, delete, and deep learning operations on hotel room records. Details on the deep learning operations company confidential at this time. Using the power of LLMs, it maintains the authoritative state of room metadata such as type, rate, status, and amenities. Other services query interal APIs to enforce booking rules, display availability calendars, and reconcile cancellations. It also analyses booking information to predict customer trends and suggest possible profitable opportunities using our in house LLM. Did we mention this thing uses AI? 

### Unit Testing

Simple and straight forward, aiming for 80% codebase coverage. What more is there to say beyond testing that the create, update, and delete functionality works as intended? Validation takes place on creates and updates before changes are written to database, throwing an error if they dont pass, deletes check the specified entry exists before committing the change. Auth is handled in another service/I don't want to go down that rabbit hole. For an example, a test simulates creating a room with a negative nightly rate and verifies that the service throws a validation error while leaving the database untouched.

### Integration Testing 

Integration links the inventory service together with a testing database and maybe a messaging broker for notifying other services. The test environment spins up the service container, a throwaway db instance, and the messaging broker. Tests cover end-to-end scenarios such as creating a room, updating its status to unavailable, and retrieving it by its UID. A pretty typical test deployment with some API calls thrown at it.

### Functional Testing

Functional brings in the ~~monkeys~~ testers to test typical workflows and ensure the system is functioning as it should. Testers simulate a guest looking for available rooms, placing a reservation, and canceling it, verifying that the room status transitions as expected. Possibly also tell them to just toy around with the site. Never know what kinds of issues a user can cook up when they are mindlessly clicking on things.

### Performance Testing

Personally I would make this an extension of the integration testing. The test api calls get called en masse for about 10 minutes to simulate workload. The services get their performance monitored by deployment platform (azure, aws, openshift, etc.) and we collect the metrics from there. But for more advanced performance testing some kind of profiling libraries could be leveraged on each service to get a better idea at where things really begin to slow down.

### Stress Testing

Again, probably an extension of performance testing. Take the test calls and crank the frequency up to simulate a load spike. Do this 3 or 4 times over the span of 10 minutes get an idea of how the system copes with it. Also to see how fast autoscaling can kick in to handle the increased load.

### Configuration Testing

Ideally this wouldn't really be needed as most devs can produce a facsmilie of the production environment on their local machine using a containers and a compose file. But for the parts that can't, we verify the service behaves correctly across different deployment environments and settings. Mainly things such as a local file-based datastore vs cloud-hosted database, environment variables for feature sets or operation modes, and maybe obtuse resource limits on system containers. 

### Security Testing

Security testing is likely going to be mostly automated scanning tools like SAST and dependency checkers. Code reviews are also very important here. The typical stuff like XSS, CSRF, sql injection and the ilk are easy enough to  catch, but the real nasty vulns are the ones you don't know about and no machine is going to catch with a scanner. But hiring white hat hackers or an external security team to audit a codebase is costs a whole lot of money that I do not have the authority to spend. Nice to have but I cannot make the call on that.

### Recovery Testing

An extension of stress testing to point of failure, along with some artificially unreachable services to determine how well the system copes with problems amidst its services. Ideally the services quietly attempt to re-establish connectivity with each other and reconcile differences in persistant stores. Falling back to a back up instance and maybe showing a "please try again" message to the user.

### Regression Testing

The test suite runs after every push to the staging branch. Ideally any failed tests are caught and the regression can be traced back to a specific commit. In the event a bug is discovered, the team can remedy it and add a test case specifically targeting it to ensure it does not happen again.

### Usability Testing

Considerly this ia largely an API service, the "testing" is going to be mostly project developers voicing their woes on documentation clarity and usage instructions. Hard to say whether this will be open to 3rd party integraters, likely not but, nonetheless efforts will be made to make the service easy to use. Descriptive error messages, clear parameter names and their purpose, etc.  Developer feedback is welcome.

### Additional

Not really a testing thing, but good SEAM and monitoring tooling is godsend. Don't neglect it.