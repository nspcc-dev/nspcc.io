---
title: Neo Saint Petersburg Competence Center
description: Neo SPCC –  R&D team developing an open-source truly decentralized cloud platform and supporting the [Neo](https://neo.org/) core
date: 2022-12-06T16:32:57+03:00
draft: false
---

{{< persons "Team" >}}
  {{< person "1" "/images/team/stanislav_bogatyrev.jpg" "Stanislav Bogatyrev" "Chief Technical Officer" >}}
  {{< person "2" "/images/team/sergey_lyubich.jpg" "Sergei Liubich" "Chief Executive Officer" >}}
  {{< person "3" "/images/team/fabian_waale.jpg" "Fabian Wahle" "Strategic Advisor" >}}
  {{< person "4" "/images/team/alexey_vanin.jpg" "Alexey Vanin" "Principal Software Engineer" >}}
  {{< person "5" "/images/team/roman_himov.jpg" "Roman Khimov" "Principal Software Engineer" >}}
  {{< person "6" "/images/team/anatoly_bogatyrev.jpg" "Anatoly Bogatyrev" "Chief Information Officer" >}}
  {{< person "7" "/images/team/anastasiya_prasolova.jpeg" "Anastasia Prasolova" "Software Engineer" >}}
  {{< person "8" "/images/team/leonard_lubitsch.jpg" "Leonard Liubich" "Software Engineer" >}}
  {{< person "9" "/images/team/evgeny_stratonikov.jpg" "Evgeny Stratonikov" "Principal Software Engineer" >}}
  {{< person "10" "/images/team/anna_shaleva.jpg" "Anna Shaleva" "Software Engineer" >}}
  {{< person "11" "/images/team/unset.jpg" "Sergio Nemirowski" "System Administrator" >}}
  {{< person "12" "/images/team/pavel_karpiy.jpeg" "Pavel Karpy" "Software Engineer" >}}
  {{< person "13" "/images/team/elizaveta_chichindaeva.jpg" "Elizaveta Chichindaeva" "QA Engineer" >}}
  {{< person "14" "/images/team/angira_kekteeva.jpg" "Angira Kekteeva" "Software Engineer" >}}
  {{< person "15" "/images/team/denis_kirillov.jpeg" "Denis Kirillov" "Software Engineer" >}}
  {{< person "16" "/images/team/mikhail_petrov.jpg" "Mikhail Petrov" "Frontend Developer" >}}
{{< /persons >}}

{{< roadmap "Roadmap" >}}
  {{< roadmap_item "left" "Q3 2022" "Technological improvements" >}}
    <ul>
      <li>
        Local data storage:
        <ul>
          <li>Configuration refactoring</li>
          <li>Versioning and optimizing storage schema</li>
        </ul>
      </li>
      <li>Improving the Tree-service component to work with s3:
        <ul>
          <li>Synchronization of trees between nodes</li>
          <li>Replication optimization</li>
          <li>Sharding</li>
        </ul>
      </li>
      <li>Additional storage node metrics <br>(writecache and Tree-service)</li>
      <li>S3 Gateways:
        <ul>
          <li>Rework the authentication/authorization mechanism</li>
          <li>IAM compatible access control schemes</li>
          <li>REST Gateway</li>
        </ul>
      </li>
      <li>CDN:
        <ul>
          <li>Accounting</li>
          <li>Domain binding</li>
          <li>Options for integration with external systems</li>
        </ul>
      </li>
      <li>Advanced monitoring of all services</li>
      <li>NeoGo:
        <ul>
          <li>RPC client refactoring</li>
          <li>Wrappers for calling contracts via RPC</li>
          <li>Loading contract states into alternative chains</li>
          <li>dBFT improvements</li>
          <li>Implementation and support of Neo protocol changes</li>
        </ul>
      </li>
      <li>Deployment in the Neo T5 Testnet network</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q2 2022" "NeoFS for the Real Economy" >}}
    <ul>
      <li>
        Dynamic eACL rules
      </li>
      <li>
        Acceleration of work with versions of objects
      </li>
      <li>
        Improved S3 ACL support
      </li>
      <li>
        Authorization from an external source
      </li>
      <li>
        Background logical integrity check
      </li>
      <li>
        Dynamic Inner ring extension
      </li>
      <li>
        Lightweight NeoGo nodes
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q1 2022" "NeoFS Improvement" >}}
    <ul>
      <li>
        Enabling the notary system
      </li>
      <li>
        Support for object versioning
      </li>
      <li>
        NeoFS CDN launching
      </li>
      <li>
        Neofs-sdk-go v1.0.0 release with integration examples
      </li>
      <li>
        Notifications API support
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q4 2021" "NeoFS Community Support" >}}
    <ul>
      <li>
        Storage engine
        <ul>
          <li>
            Dynamic queues
          </li>
          <li>
            Data replication upgrade
          </li>
          <li>
            Data evacuation
          </li>
          <li>
            Background scrubber
          </li>
          <li>
            Degradation mode
          </li>
        </ul>
      </li>
      <li>
        DNS/NNS in SDK
      </li>
      <li>
        NeoFS documentation release
      </li>
      <li>
        S3 app compatibility
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q3 2021" "NeoFS MainNet" >}}
    <ul>
      <li>
        NeoFS MainNet release
      </li>
      <li>
        NeoGo MainNet release
      </li>
      <li>
        Economic model optimization
      </li>
      <li>
        ACL translation for gateways
      </li>
      <li>
        Detailed documentation, community helper tools and papers
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q2 2021" "NeoFS Services" >}}
    <ul>
      <li>
        Storage engine optimizations
      </li>
      <li>
        HTTP gateway release
      </li>
      <li>
        S3 gateway release
      </li>
      <li>
        TLS support in storage nodes
      </li>
      <li>
        NeoGo RC-compatible releases
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q1 2021" "NeoFS in the Neo 3.0 Testnet" >}}
    <ul>
      <li>
        NeoFS deployment in the Neo 3.0 Testnet
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q4 2020" "NeoFS Infrastructure" >}}
    <ul>
      <li>
        Service infrastructure implementation for the NeoFS public storage
      </li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q3 2020" "NeoFS 1.0 release" >}}
    <ul>
      <li>NeoFS v1.0 release and public access to the storage network</li>
      <li>NeoFS CDN and HTTP-gate</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q2 2020" "NEO 3.0" >}}
    <ul>
      <li>Integration of NeoFS and Neo Blockchain Smart Contract</li>
      <li>NeoFS Contract Development for Neo Blockchain</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q1 2020" "Core components development completion" >}}
    <ul>
      <li>Reputation system design and implementation</li>
      <li>Implementation of adding and excluding Inner Ring nodes</li>
      <li>Implementation of excluding storage nodes from Network Map</li>
      <li>Implementation of support for new network protocols</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q4 2019" "Testing and optimization" >}}
    <ul>
      <li>Closed NeoFS alpha test for Neo development community</li>
      <li>Open NeoFS alpha test</li>
      <li>Upgraded storage group model implementation</li>
      <li>Payment model balancing</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q3 2019" "Alpha release" >}}
    <ul>
      <li>Incentive model release</li>
      <li>Proof-of-Concept launch</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q2 2019" "Feature development" >}}
    <ul>
      <li>Implementation of data replication</li>
      <li>Project presentation</li>
      <li>Implementation of smart contract and payment methods for data storage</li>
      <li>API design</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "left" "Q1 2019" "Platform development" >}}
    <ul>
      <li>Implementation of methods to work with physical blob storage</li>
      <li>Metadata storage implementation</li>
      <li>Implementation of data audit and data validation methods</li>
    </ul>
  {{< /roadmap_item >}}
  {{< roadmap_item "right" "Q4 2018" "Start" >}}
    <ul>
      <li>Development process organization</li>
      <li>Design of basic project architecture and experiments</li>
      <li>Research plan release</li>
      <li>Network protocols (exchange and routing) implementation</li>
      <li>Implementation of the algorithm for objects placement and retrieval in the network</li>
    </ul>
  {{< /roadmap_item >}}
{{< /roadmap >}}
