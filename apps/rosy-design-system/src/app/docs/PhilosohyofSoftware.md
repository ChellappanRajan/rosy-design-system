A Philosophy of Software Design


Dependency is when one part of the code relies on another. In our first example, processOrder is dependent on calculateDiscount—if the discount logic changes, so does the behavior of processOrder.

Obscurity happens when the code is not self-explanatory. In our second example, unclear naming and unexplained magic numbers make the code hard to understand.


Change amplification: A seemingly small change can require
editing multiple files.


Cognitive load: The volume of knowledge required to complete a
task is reflected in the time it takes to learn that knowledge and,
subsequently, create software.


Unknown unknowns: The code that needs to be changed or
information a programmer needs to successfully complete a task.



