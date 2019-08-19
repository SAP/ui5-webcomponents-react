FROM ubuntu:18.04

LABEL version="0.1.0"
LABEL repository="https://github.com/SAP/ui5-webcomponents-react"
LABEL homepage="https://github.com/SAP/ui5-webcomponents-react"
LABEL maintainer="Marcus Notheis <marcus.notheis@sap.com>"

LABEL com.github.actions.name="UI5 Web Components for React Image"
LABEL com.github.actions.description="Provides node, the yarn CLI and Java"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="blue"
COPY LICENSE README.md /

RUN mkdir -p /tools/sap-machine
ENV JAVA_HOME=/tools/sap-machine
RUN apt-get update && apt-get install -y curl wget

# Install Node 10
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -y nodejs

# Install Yarn
RUN apt-get update && \
    apt-get install -y yarn

# Install SAP Machine
RUN curl -L https://github.com/SAP/SapMachine/releases/download/sapmachine-11.0.4/sapmachine-jre-11.0.4_linux-x64_bin.tar.gz > sap-machine.tar.gz && \
    tar -xzf sap-machine.tar.gz && \
    cp -a sapmachine-jre-11.0.4/. ${JAVA_HOME}/

ENV PATH="${JAVA_HOME}/bin:${PATH}"

RUN \
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["/entrypoint.sh"]
CMD ["help"]
