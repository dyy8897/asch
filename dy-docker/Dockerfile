FROM aschplatform/asch
COPY libstdc++.so.6.0.21  /usr/lib/x86_64-linux-gnu/
RUN rm -f /usr/lib/x86_64-linux-gnu/libstdc++.so.6
RUN ln -s /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21  /usr/lib/x86_64-linux-gnu/libstdc++.so.6
WORKDIR /asch
